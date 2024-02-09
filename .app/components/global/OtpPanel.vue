<!-- OtpForm.vue -->

<template>
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
          Enter OTP Code
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-400 mb-6">
          Check your email or SMS for the OTP code.
        </BaseParagraph>
      </div>
      <div class="px-8 py-4">
        <div class="mb-4 space-y-4">
          <Field
            v-slot="{ field, errorMessage, handleChange, handleBlur }"
            name="otpCode"
          >
            <BaseInput
              :model-value="field.value"
              :error="errorMessage"
              :disabled="isSubmitting"
              type="text"
              label="OTP Code"
              placeholder="Enter the OTP code"
              autocomplete="one-time-code"
              :classes="{ input: 'h-12' }"
              @update:model-value="handleChange"
              @blur="handleBlur"
            />
          </Field>

          <!-- Add any additional fields you may need for OTP verification -->
        </div>

        <div class="mb-6">
          <BaseButton
            :disabled="isSubmitting || resendTimer > 0"
            :loading="isSubmitting"
            type="submit"
            color="primary"
            class="!h-12 w-full"
          >
            Verify OTP
          </BaseButton>
        </div>

        <!-- Timer display -->
        <div v-if="resendTimer>0" class="text-muted-400 mt-2 text-center">
          Resend OTP in {{resendTimer}} seconds
        </div>

        <!-- Link to resend OTP or go back to login -->
        <p class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5">
          <span>Didn't receive the OTP?</span>
          <NuxtLink
            v-if="resendTimer === 0"
            @click="startTimer"
            class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
          >
            Resend OTP
          </NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {Field, useForm} from 'vee-validate'
import {z} from 'zod'
import {useAuthStore} from "~/store/auth";



const auth = useAuthStore();
const activate = auth.activate;


const VALIDATION_TEXT = {
  OTP_ERROR: 'otp code should be a 6 digit number',
}

// Define your Zod schema and validation logic here
const zodSchema = z.object({
  otpCode: z.string().refine(data => /^\d{6}$/.test(data), {
    message: VALIDATION_TEXT.OTP_ERROR,
  })
  // Add any additional fields you may need for OTP verification
});

// Other logic for form handling
const {
  handleSubmit,
  isSubmitting,
  // other form methods and properties
} = useForm({
  validationSchema: zodSchema,
  // other form options
});

// Timer logic
const resendTimer = useState('resendTimer', ()=>0);

const startTimer = () => {
  // Set the timer duration in seconds (e.g., 60 seconds)
  resendTimer.value = 60;

  const timerInterval = setInterval(() => {
    resendTimer.value -= 1;

    if (resendTimer.value <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
};

// Define the onSubmit method
const onSubmit = handleSubmit(async (values) => {
  // Handle OTP verification logic here
  console.log('OTP form submitted with values:', values);
  // Example: Call an API to verify the OTP, etc.
});


</script>
