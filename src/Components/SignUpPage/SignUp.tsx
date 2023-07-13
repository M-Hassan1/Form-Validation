"use client"


import { BiSolidHide } from 'react-icons/bi';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useFormik } from 'formik';
import { useState } from 'react';
import  jwtDecode from 'jwt-decode';
import { formSchema } from '@/Components/LoginPage/Validation';


interface InitialValues {
  FullName: string;
  userEmail: string;
  userPasswordR: string;
  confirmPassword: String;
}

const initialValues: InitialValues = {
  FullName: "",
  userEmail: "",
  userPasswordR: "",
  confirmPassword: "",
};

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // New state for tracking login status
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values, action) => {
      console.log("values", values);
      action.resetForm();
      setSubmitted(true);
    }
  });

  const clientId = process.env.Next_GooGle_Cloud_CLIENt_ID?.toString(); 


  
  const handleGoogleLoginSuccess = (credentialResponse: any) => {
    console.log("Google login success:", credentialResponse);
    const details = jwtDecode(credentialResponse.credential);
    console.log(details);
    setLoggedIn(true); 
  };

  const handleGoogleLoginError = () => {
    console.log("Google login failed");
  };

  return (
    <div className="flex justify-center h-screen w-full items-center">
      {submitted && (
        <p className="absolute top-0 p-4 text-green-800 bg-gray-300">
          Form submitted successfully!
        </p>
      )}

        <form onSubmit={ handleSubmit }
          
          className="w-[28em] bg-slate-200 h-[33em] relative rounded-md shadow-md flex flex-col items-center justify-around "
        >
          <h1 className="text-3xl font-sans text-pink-400">Registration Page</h1>

          <input
            className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent" type="text" placeholder="Enter Full Name" name="FullName" value={values.FullName} onChange={handleChange} autoComplete="off" onBlur={handleBlur} />
          {errors.FullName && touched.FullName ? (
            <p className="text-red-500 -mt-6">{errors.FullName}</p>
          ) : null}
          <input
            className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent" type="email" placeholder="Email" name="userEmail" autoComplete="off" value={values.userEmail} onChange={handleChange} onBlur={handleBlur} />

              {errors.userEmail && touched.userEmail ? (
                <p className="text-red-500 -mt-6">{errors.userEmail}</p>
              ) : null}
              <input
            className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent" type="password" placeholder="Password" name="userPasswordR" autoComplete="off" value={values.userPasswordR} onChange={handleChange} onBlur={handleBlur} />

              {errors.userPasswordR && touched.userPasswordR ? (
                <p className="text-red-500 -mt-6">{errors.userPasswordR}</p>
              ) : null}
        
              <div className="absolute right-20 top-52 cursor-pointer">
                <BiSolidHide size={21} />
              </div>
              <button
                  type='button'
                 className="w-[30%] text-xl text-white h-[42px] rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-800 duration-300"
          >
            Login
          </button>
          <p className="mt-4">Login With</p>
          <div className="w-[80%] h-[3em] flex justify-around">
            {/* Google Setting */}
            <GoogleOAuthProvider clientId={clientId!}>
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
              />
            </GoogleOAuthProvider>
            
          </div>
        </form>
      </div>
    
  );
};

export default Signup;
