import * as yup from "yup";




export const GroupFormSchema = yup.object({
    name: yup.string().required("Name is required"),
    alias: yup.string().optional()
})