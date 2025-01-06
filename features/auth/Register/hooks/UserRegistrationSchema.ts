import * as yup from "yup";




export const UserRegistrationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required")
})