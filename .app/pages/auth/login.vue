<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'
import {useAuthStore} from "~/store/auth";
import {storeToRefs} from "pinia";



const auth = useAuthStore();


const login = auth.login;

const {loading, type, message, isAuthenticated} = storeToRefs(auth);


definePageMeta({
  layout: 'default',
  title: 'Login',
  middleware: ['redirect'],
  preview: {
    title: 'Login 3',
    description: 'For authentication and sign in',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-login-3.png',
    srcDark: '/img/screens/auth-login-3-dark.png',
    order: 98,
  },
})

const VALIDATION_TEXT = {
  PHONE_NUMBER_REQUIRED: 'A valid phone number is required',
  PASSWORD_REQUIRED: 'A password is required',
}

// Custom phone number validator function
const isValidIranianPhoneNumber = (value: string): boolean => {
  // Allow Iranian phone numbers in the format 09123456789 or +98 9123456789
  const phoneNumberRegex = /^(\+98|0)?9\d{9}$/;

  return phoneNumberRegex.test(value);
};


// This is the Zod schema for the form input
const zodSchema = z.object({
  phone_number: z.string().refine((value) => isValidIranianPhoneNumber(value), {
    message: VALIDATION_TEXT.PHONE_NUMBER_REQUIRED,
  }),
  password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
  trustDevice: z.boolean(),
});


// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  phone_number: '',
  password: '',
  trustDevice: false,
}))

const {
  handleSubmit,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

const router = useRouter()
const toaster = useToaster()


onMounted(() => {
  if(isAuthenticated.value){
    router.push("/")
  }
  watch([isAuthenticated], ()=>{
    console.log(isAuthenticated.value, "lkhlkiiyfvikhb kib")
    if(isAuthenticated.value){
      router.push("/")
    }
  })
})


// This is where you would send the form data to the server
const onSubmit = handleSubmit(async (values) => {
  // here you have access to the validated form values
  const route = useRoute();
  const callBackUrl = route.query.callBackUrl || '/'

  await login(values.phone_number, values.password, callBackUrl)

  try {
    // fake delay, this will make isSubmitting value to be true
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toaster.clearAll()

    console.log(message.value, type.value)
    console.log(isAuthenticated.value)
    toaster.show({
      title: type.value || undefined,
      message: message.value || '',
      color: type.value || undefined,
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
  <div
      class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"
  >

    <div class="flex w-full items-center justify-center ">
      <div class="relative mx-auto w-full max-w-2xl">
        <!--Form-->
        <div class="me-auto ms-auto mt-4 w-full bg-muted-200 dark:bg-muted-800 p-10 rounded-md">
          <form
              method="POST"
              action=""
              @submit.prevent="onSubmit"
              class="me-auto ms-auto mt-4 w-full max-w-md"
              novalidate
          >
            <div class="text-center">
              <BaseHeading as="h2" size="3xl" weight="medium">
                Welcome back!
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400 mb-6">
                Login with your credentials
              </BaseParagraph>
            </div>
            <div class="px-8 py-4">
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
                      placeholder="09*********"
                      autocomplete="tel"
                      :classes="{
                      input: 'h-12',
                    }"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                  />
                </Field>

                <Field
                    v-slot="{ field, errorMessage, handleChange, handleBlur }"
                    name="password"
                >
                  <BaseInput
                      :model-value="field.value"
                      :error="errorMessage"
                      :disabled="isSubmitting"
                      type="password"
                      label="Password"
                      placeholder="Password"
                      :classes="{
                      input: 'h-12',
                    }"
                      @update:model-value="handleChange"
                      @blur="handleBlur"
                  />
                </Field>
              </div>
              <div class="mb-6">
                <div class="mt-6 flex items-center justify-between">
                  <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="trustDevice"
                  >
                    <BaseCheckbox
                        :model-value="field.value"
                        :disabled="isSubmitting"
                        shape="rounded"
                        label="Trust this device for 60 days"
                        color="primary"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                    />
                  </Field>
                </div>
              </div>
              <div class="mb-6">
                <BaseButton
                    :disabled="isSubmitting"
                    :loading="isSubmitting"
                    type="submit"
                    color="primary"
                    class="!h-12 w-full"
                >
                  Sign In
                </BaseButton>
              </div>

              <!--No account link-->
              <p
                  class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
              >
                <span>Don't have an account?</span>
                <NuxtLink
                    to="/auth/signup/"
                    class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  Sign Up
                </NuxtLink>
              </p>

              <p
                class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
              >
                <span>Forgot your password?</span>
                <NuxtLink
                  to="/auth/recovery/"
                  class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  Recover
                </NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
