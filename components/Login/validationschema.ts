import * as Yup from "yup";

export const getValidationSchema = (isForgetPassword: boolean) =>
  Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),

    ...(isForgetPassword
      ? {}
      : {
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
        }),
  });


  export const resetPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),

  termsAgreed: Yup.boolean().oneOf(
    [true],
    "You must agree to Terms & Privacy Policy"
  ),
});