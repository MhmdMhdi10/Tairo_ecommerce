<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'


import {useAuthStore} from "~/store/auth";
import {storeToRefs} from 'pinia';



const auth = useAuthStore();

const recover_link = auth.recover_link;



const {loading, type, message, isAuthenticated} = storeToRefs(auth);


const success = useState(() => false)


definePageMeta({
  layout: 'default',
  title: 'Recover Password',
  preview: {
    title: 'Recover',
    description: 'For password recovery',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-recover.png',
    srcDark: '/img/screens/auth-recover-dark.png',
    order: 103,
  },
})

const VALIDATION_TEXT = {
  PHONE_NUMBER_REQUIRED: 'A valid phone number is required',
}


const isValidIranianPhoneNumber = (value: string): boolean => {
  // Allow Iranian phone numbers in the format 09123456789 or +98 9123456789
  const phoneNumberRegex = /^(\+98|0)?9\d{9}$/;

  return phoneNumberRegex.test(value);
};


// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z.object({
  phone_number: z
    .string()
    .refine((value) => isValidIranianPhoneNumber(value), {
      message: VALIDATION_TEXT.PHONE_NUMBER_REQUIRED,
    }),
});


// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  phone_number: '',
}))

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues,
})

const router = useRouter()
const toaster = useToaster()



onMounted(() => {
  watch([type, message], () => {
    if (type.value === 'success' && message.value === 'Password reset link has been sent to you via SMS') {
    }
  });
  watch([isAuthenticated], ()=>{
    const route = useRoute();
    const callBackUrl = route.query.callBackUrl || '/'
    if(isAuthenticated){
      router.push(callBackUrl)
    }
  })
});



// This is where you would send the form data to the server
const onSubmit = handleSubmit(async (values) => {
  await recover_link(values.phone_number)

  try {
    // fake delay, this will make isSubmitting value to be true
    await new Promise((resolve) => setTimeout(resolve, 2000))

    success.value = true

    toaster.clearAll()
    await toaster.show({
      title: type.value || undefined, // Use type.value, and provide a default value if it's null
      message: message.value || '', // Similarly, handle message.value if it's null
      color: type.value || undefined, // Use type.value for color if it's a ref
      icon: 'ph:user-circle-fill',
      closable: true,
    })
  } catch (error: any) {

    toaster.clearAll()
    await toaster.show({
      title: "error" || undefined, // Use type.value, and provide a default value if it's null
      message: error.message || '', // Similarly, handle message.value if it's null
      color: "danger" || undefined, // Use type.value for color if it's a ref
      icon: 'ph:user-circle-fill',
      closable: true,
    })

    return
  }
})
</script>

<template>
    <div class="flex w-full items-center justify-center">
      <div class="relative mx-auto w-full max-w-2xl">
        <!--Form-->
        <div class="me-auto ms-auto mt-4 w-full">
          <div class="me-auto ms-auto mt-4 w-full max-w-md">
            <div class="text-center">
              <BaseHeading as="h2" size="3xl" weight="medium">
                Recover Password
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400 mb-6">
                Follow the instuctions sent to your email address
              </BaseParagraph>
            </div>
            <Transition
              mode="out-in"
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="scale-0 opacity-0"
              enter-to-class="scale-100 opacity-100"
              leave-active-class="transition-all duration-75 ease-in"
              leave-from-class="scale-100 opacity-100"
              leave-to-class="scale-0 opacity-0"
            >
              <div v-if="success" class="px-8 py-4">
                <div class="mb-4 space-y-4">
                  <BaseMessage class="p-6" :closable="false">
                    <p class="text-base">
                      An email has been sent to you with instructions on how to
                      reset your password.
                    </p>

                    <small class="block pt-2">
                      If you don't receive an email, please check your spam
                      folder. If you still don't receive an email, that means
                      you don't have an account
                    </small>
                  </BaseMessage>
                </div>
              </div>
              <form
                v-else
                method="POST"
                action=""
                @submit.prevent="onSubmit"
                class="px-8 py-4"
                novalidate
              >
                <div class="mb-4 space-y-4">
                  <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="phone_number"
                  >
                    <BaseInput
                      :model-value="field.value"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      type="tel"
                      label="Phone Number"
                      placeholder="Phone Number"
                      autocomplete="tel"
                      :classes="{
                        input: 'h-12'
                      }"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                    />
                  </Field>
                </div>

                <div class="mb-6">
                  <BaseButton
                    :disabled="isSubmitting"
                    :loading="isSubmitting"
                    type="submit"
                    color="primary"
                    class="!h-12 w-full"
                  >
                    Recover Password
                  </BaseButton>
                </div>
                <!--No account link-->
                <p
                  class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
                >
                  <span>False alert?</span>
                  <NuxtLink
                    to="/auth/login-1"
                    class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                  >
                    Sign in
                  </NuxtLink>
                </p>
              </form>
            </Transition>
          </div>
        </div>
      </div>
    </div>
</template>
