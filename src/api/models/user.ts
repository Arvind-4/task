import * as yup from 'yup'

export const yupUserSchema = yup.object({
  status: yup.string().required().default('active'),
  name: yup.string().required(),
  dob: yup.string().required(),
  email: yup.string().required().email(),
  roll_number: yup.string().required(),
  data: yup.array(),
})

export type AuthSchema = yup.InferType<typeof yupUserSchema>
