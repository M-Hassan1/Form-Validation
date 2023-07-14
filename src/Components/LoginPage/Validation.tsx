import * as Yup from 'yup';

export const formSchema = Yup.object({
    userName:Yup.string().min(2).max(20).required("Enter Email"),
    userPassword:Yup.string().min(8).required("Confirm Your Password"),

    
})