import * as Yup from 'yup';

export const formSchema = Yup.object({
    // userName:Yup.string().min(2).max(20).required("Enter Email"),
    // userPassword:Yup.string().min(8).required("Confirm Your Password"),
    FullName:Yup.string().required("Enter Your Email "),
    UserEmail:Yup.string().min(2).max(40).required("Enter Email"),
    userPasswordR:Yup.string().min(8).required("Enter Password "),
    confirmPassword:Yup.string().min(8).required("Confirm Your Password"),

})