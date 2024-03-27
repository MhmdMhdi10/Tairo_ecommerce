<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import IMask from 'imask'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'
import { useAuthStore} from "~/store/auth";


const auth = useAuthStore();
const VALIDATION_TEXT = {
  OLD_PASSWORD_REQUIRED: 'oldPasswordRequired', // Translate old password required text
  NEW_PASSWORD_LENGTH: 'newPasswordLength', // Translate new password length text
  NEW_PASSWORD_MATCH: 'newPasswordMatch', // Translate new password match text
};

definePageMeta({
  title: 'Recover Password',
  layout: 'empty',
  preview: {
    title: 'Recover',
    description: 'For password recovery',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-recover.png',
    srcDark: '/img/screens/auth-recover-dark.png',
    order: 103,
  }
})

const zodSchema = z
  .object({
    newPassword: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword) {
      if (data.newPassword.length < 4) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.NEW_PASSWORD_LENGTH,
          path: ['newPassword'],
        })
      }
      if (data.newPassword !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.NEW_PASSWORD_MATCH,
          path: ['confirmPassword'],
        })
      }
    }
  })

type FormInput = z.infer<typeof zodSchema>

const { data, pending, error, refresh } = await useFetch('/api/profile')

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  newPassword: '',
  confirmPassword: '',
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

const fieldsWithErrors = computed(() => Object.keys(errors.value).length)

const mask = shallowRef<IMask.InputMask<{ mask: string }> | undefined>(undefined)

const isTokenValid = useState(()=>false)

onMounted(() => {
  const router = useRoute()
  const uuid = router.params.uuid

  auth.recover_link_verify(isTokenValid, uuid)
})

onBeforeUnmount(() => {
  mask.value?.destroy()
  mask.value = undefined
})

onBeforeRouteLeave(() => {
  if (meta.value.dirty) {
    return confirm('You have unsaved changes. Are you sure you want to leave?')
  }
})

const toaster = useToaster()
const router = useRouter()
const success = useState(()=>false)

const onSubmit = handleSubmit(
  async (values) => {
    const newPassword = values.newPassword
    const confirmPassword = values.confirmPassword

    try {
      const route = useRoute()
      const uuid = route.params.uuid

      await auth.recover_change_password(newPassword, confirmPassword, uuid)
      // Close the current tab or window
      router.push("/")

    } catch (error: any) {
      setFieldError('newPassword', 'Password change failed')
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      toaster.clearAll()
      toaster.show({
        title: 'Oops!',
        message: error.message,
        color: 'danger',
        icon: 'lucide:alert-triangle',
        closable: true,
      })
      return
    }

    resetForm()

    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    success.value = true
    setTimeout(() => {
      success.value = false
    }, 3000)
  },
  (error) => {
    success.value = false
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)



// const error = ref(null)

// Assume some logic to set the error, e.g., when a 404 occurs
const handle404Error = () => {
  error.value = {
    statusCode: 404,
    // other error properties
  }
}

// Call the function to set the 404 error
handle404Error()
</script>

<template>
  <div  v-if="isTokenValid" class="min-h-screen flex items-center justify-center bg-muted-100 dark:bg-muted-900 ">
  <form method="POST" action="" @submit.prevent="onSubmit" class="w-full p-8 rounded bg-muted-100 dark:bg-muted-900 flex justify-center">
    <BaseCard class="max-w-5xl">
      <div class="flex items-center justify-between p-4">
        <div>
          <!-- Remove commented code -->
          <!-- BaseHeading tag="h2" size="sm" weight="medium" lead="normal" class="uppercase tracking-wider">Recover</BaseHeading -->
          <!-- BaseText size="xs" class="text-muted-400">Edit your account prefs and settings</BaseText -->
        </div>
        <div class="flex items-center gap-2 justify-items-center">
          <BaseButton class="w-24" :to="'/auth/recover'">Cancel</BaseButton>
          <BaseButton
            type="submit"
            color="primary"
            class="w-24"
            :disabled="isSubmitting"
            :loading="isSubmitting"
          >
            Save
          </BaseButton>
        </div>
      </div>
      <div class="p-4">
        <div class="mx-auto max-w-lg space-y-12 py-8">
          <BaseMessage v-if="success" @close="success = false">
            Your settings have been saved!
          </BaseMessage>
          <BaseMessage
            v-if="fieldsWithErrors"
            type="danger"
            @close="() => setErrors({})"
          >
            This form has {{ fieldsWithErrors }} errors, please check them before submitting.
          </BaseMessage>
          <TairoFormGroup label="Change Password" sublabel="For improved account security">
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12">
                <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="newPassword">
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="password"
                    icon="ph:lock-duotone"
                    placeholder="New password"
                    autocomplete="new-password"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>
              <div class="col-span-12">
                <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="confirmPassword">
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="password"
                    icon="ph:lock-duotone"
                    placeholder="Repeat new password"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>
            </div>
          </TairoFormGroup>
          <!-- Remove commented code for 2 Factor Auth and Notifications -->
        </div>
      </div>
    </BaseCard>
    <TairoFormSave :disabled="isSubmitting" :loading="isSubmitting" @reset="resetForm" />
    </form>

  </div>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen pt-20" v-else><TairoError :error="error"/></div>
</template>
