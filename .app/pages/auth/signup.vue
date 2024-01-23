+<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  layout: 'default',
  title: 'Signup',
  preview: {
    title: 'Signup 2',
    description: 'For authentication and sign up',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-signup-2.png',
    srcDark: '/img/screens/auth-signup-2-dark.png',
    order: 101,
  },
})

const VALIDATION_TEXT = {
  PHONE_NUMBER_REQUIRED: 'A valid phone number is required',
  PASSWORD_LENGTH: 'Password must be at least 4 characters',
  PASSWORD_CONTAINS_PHONE: 'Password cannot contain your phone number',
  PASSWORD_MATCH: 'Passwords do not match',
  TERMS_REQUIRED: 'You must agree to the terms and conditions',
}

// Custom phone number validator function
const isValidIranianPhoneNumber = (value: string): boolean => {
  // Allow Iranian phone numbers in the format 09123456789 or +98 9123456789
  const phoneNumberRegex = /^(\+98|0)?9\d{9}$/;

  return phoneNumberRegex.test(value);
};

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
    .object({
      phone_number: z.string().refine((value) => isValidIranianPhoneNumber(value), {
        message: VALIDATION_TEXT.PHONE_NUMBER_REQUIRED,
      }),
      password: z.string().min(4, VALIDATION_TEXT.PASSWORD_LENGTH),
      confirmPassword: z.string(),
      terms: z.boolean(),
    })
    .superRefine((data, ctx) => {
      // This is a custom validation function that will be called
      // before the form is submitted
      if (data.password.includes(data.phone_number)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.PASSWORD_CONTAINS_PHONE,
          path: ['password'],
        })
      }
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.PASSWORD_MATCH,
          path: ['confirmPassword'],
        })
      }
      if (!data.terms) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.TERMS_REQUIRED,
          path: ['terms'],
        })
      }
    })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  phone_number: '',
  password: '',
  confirmPassword: '',
  terms: false,
}))

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues,
})

const router = useRouter()
const toaster = useToaster()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(async (values) => {
  // here you have access to the validated form values
  console.log('auth-success', values)

  try {
    // fake delay, this will make isSubmitting value to be true
    await new Promise((resolve) => setTimeout(resolve, 4000))

    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Account created!`,
      color: 'success',
      icon: 'ph:user-circle-fill',
      closable: true,
    })
  } catch (error: any) {
    // handle error

    return
  }

  router.push('/layouts/onboarding-1')
})

const showOtpPanel = ref(false);

const toggleOtpPanel = () => {
  showOtpPanel.value = !showOtpPanel.value;
};
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4">
    <div :class="{ 'filter blur-sm': showOtpPanel }">
      <div class="flex w-full items-center justify-center">
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
                  Welcome to Tairo
                </BaseHeading>
                <BaseParagraph size="sm" class="text-muted-400 mb-6">
                  Let's start by creating you account
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
                        placeholder="••••••••••"
                        autocomplete="new-password"
                        :classes="{
                        input: 'h-12',
                      }"
                        @update:model-value="handleChange"
                        @blur="handleBlur"
                    />
                  </Field>

                  <Field
                      v-slot="{ field, errorMessage, handleChange, handleBlur }"
                      name="confirmPassword"
                  >
                    <BaseInput
                        :model-value="field.value"
                        :error="errorMessage"
                        :disabled="isSubmitting"
                        type="password"
                        label="Confirm Password"
                        placeholder="••••••••••"
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
                        name="terms"
                    >
                      <BaseCheckbox
                          :model-value="field.value"
                          :disabled="isSubmitting"
                          :error="errorMessage"
                          shape="rounded"
                          color="primary"
                          @update:model-value="handleChange"
                          @blur="handleBlur"
                      >
                        <span>
                          <span>I accept the</span>
                          <a
                              href="#"
                              class="text-primary-500 hover:underline focus:underline"
                          >
                            Terms of Service
                          </a>
                        </span>
                      </BaseCheckbox>
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
                    Sign Up
                  </BaseButton>
                </div>
                <!--No account link-->
                <p
                    class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
                >
                  <span>Already have an account?</span>
                  <NuxtLink
                      to="/auth/login"
                      class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                  >
                    Login
                  </NuxtLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Conditionally render the OTP panel -->
    <OtpPanel
      v-if="showOtpPanel"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-md transition-all duration-300 z-20"
    />
  </div>
</template>
