import * as Yup from 'yup';

export const formSchema = Yup.object({
    // user_firstname:Yup.string().min(2).max(20).required("Enter Your First Name"),
    // user_lastname:Yup.string().min(2).max(20).required("Enter Your Last Name"),
    userName:Yup.string().required("Enter Your Email "),
    userPassword:Yup.string().min(8).required("Enter Password "),

    // user_subject:Yup.string().min(2).max(40).required("Enter Your SubJect"),
    // message:Yup.string().min(5).max(5000).required("Write A Message")
})