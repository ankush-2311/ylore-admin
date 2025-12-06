import * as Yup from 'yup'

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/

export const updatePasswordSchema = Yup.object({
  currentPassword: Yup.string().required('Current password is required'),

  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password must have at least 8 characters')
    .matches(passwordRegex, 'Please enter strong password'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Confirm password is required'),
})
