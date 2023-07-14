import * as Yup from 'yup';

export const formSchema = Yup.object({
    full_Name:Yup.string().min(2).max(30).required("Enter Full Name"),
    user_Email:Yup.string().max(60).required("Enter Your Email"),
    user_password:Yup.string().min(10).max(45).required("Enter Strong Password")
  
})