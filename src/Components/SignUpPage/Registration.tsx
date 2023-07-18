"use client"
import { useFormik } from "formik";
import { useState } from "react";
import { formSchema } from "./SignUpValidaton";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import Login from "../LoginPage/Login";
import { auth } from "../../../firebase/firebaseConfig";



interface initialValues{
    full_Name:string,
    user_Email:string,
    user_password:string,
} 

const initialValues = {
    full_Name: "",
    user_Email: "",
    user_password: "",
}

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleGoogle = async (e :any) => {


    const provider = await new GoogleAuthProvider(); 
      return signInWithPopup(auth, provider)
  }



    const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
        initialValues:initialValues,
        validationSchema:formSchema,
        onSubmit : (values, action) => {
            console.log("values", values);
            action.resetForm();
            setSubmitted(true);
            // setShowSuccess(true);
            // window?.setTimeout(() =>{
            // setSubmitted(false);
            // },4000)
        }
    })
        
    if (submitted) {
        return(
            
                <Login />
            
        )
    }

  return (
    <div className="flex justify-center h-screen w-full items-center">
      {submitted && (
        <p className="absolute top-0 p-4 text-green-800 bg-gray-300">
          Form submitted successfully!
        </p>
      )}

        <form  onSubmit={handleSubmit}
          className="w-[28em] bg-slate-200 h-[33em] relative rounded-md shadow-md flex flex-col items-center justify-around "
        >
          <h1 className="text-3xl font-sans text-pink-400">Registration Page</h1>

          <input
            className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent" type="text" placeholder="Enter Full Name" name="full_Name" autoComplete='off' value={values.full_Name} onChange={handleChange} onBlur={handleBlur} />
                {errors.full_Name && touched.full_Name ? (
                    <p className="text-red-500 -mt-6">{errors.full_Name}</p>
                    ) : null}
          <input
            className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent" type="email" placeholder="Email" name="user_Email" autoComplete="off" value={values.user_Email} onChange={handleChange} onBlur={handleBlur} />
                {errors.user_Email && touched.user_Email ? (
                    <p className="text-red-500 -mt-6">{errors.user_Email}</p>
                    ) : null}

              <input
            className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent" type="password" placeholder="Password" name="user_password" autoComplete='off' value={values.user_password} onChange={handleChange} onBlur={handleBlur}  
            />
                {errors.user_password && touched.user_password ? (
                    <p className="text-red-500 -mt-6">{errors.user_password}</p>
                    ) : null}
        
              {/* <div className="absolute right-20 top-52 cursor-pointer">
                <BiSolidHide size={21} />
              </div> */}
           <button
            type="submit" // Change the type to 'submit'
                className="w-[30%] text-xl text-white h-[42px] rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-800 duration-300"
                >
                     SignUp
                </button>

          <p className="mt-4">Login With</p>
          <div className="w-[80%] h-[3em] text-lg flex justify-around">
            {/* Google Setting */}
            <button onClick={handleGoogle} className="w-[45%]  h-[90%] rounded-md bg-white hover:bg-slate-100 active:scale-90 duration-300">
              Google
            </button>
            <button className="w-[45%] h-[90%] rounded-md bg-white hover:bg-slate-100 active:scale-90 duration-300">
              Facebook
            </button>
            
          </div>
        </form>
      </div>

  )
}

export default Registration;