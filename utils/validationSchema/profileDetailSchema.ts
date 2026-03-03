import * as Yup from "yup";

export const updateProfileSchema = Yup.object({
  firstName: Yup.string().required("firstName is required"),
  lastName: Yup.string().required("lastName is required"),
  email: Yup.string().required("email is required"),
  mobile: Yup.string()
    .required("Phone is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  role: Yup.string().required("role is required"),
});


export const PasswordSchema = Yup.object({
  currentPassword: Yup.string().required("Required"),
  newPassword: Yup.string().min(6, "Min 6 chars").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Required"),
});

