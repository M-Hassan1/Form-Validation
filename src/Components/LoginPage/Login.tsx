"use client"

// import { BiSolidHide, BiShow } from 'react-icons/bi';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useFormik } from 'formik';
// import { formSchema } from "./Validation";
// import { useState, useEffect } from 'react';
// import jwtDecode from 'jwt-decode';
// import SignUp from '../SignUpPage/SignUp';

// interface InitialValues {
//   userName: string;
//   userPassword: string;
// }

// const initialValues: InitialValues = {
//   userName: "",
//   userPassword: "",
// };

// const Login = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false); // New state for tracking login status
//   const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
//     initialValues: initialValues,
//     validationSchema: formSchema,
//     onSubmit: (values, action) => {
//       console.log("values", values);
//       action.resetForm();
//       setSubmitted(true);
//     }
//   });

//   const clientId = "868953276567-nrshalq5pd2bqdjng3r64c9htr5dp7u1.apps.googleusercontent.com"; // Replace with your actual client ID

//   const handleGoogleLoginSuccess = (credentialResponse: any) => {
//     console.log("Google login success:", credentialResponse);
//     const details = jwtDecode(credentialResponse.credential);
//     console.log(details);
//     setLoggedIn(true); // Set login status to true after successful login
//   };

//   const handleGoogleLoginError = () => {
//     console.log("Google login failed");
//   };
//  const [showSignUp, setShowSignUp] = useState(false);

//   useEffect(() => {
//     if (submitted || loggedIn) {
//       const delay = 2000; // 2 seconds delay
//       const timeout = setTimeout(() => {
//         setShowSignUp(true);
//       }, delay);

//       return () => {
//         clearTimeout(timeout);
//       };
//     }
//   }, [submitted, loggedIn]);
  
//     return (
//       <div>
//         {showSignUp && <SignUp />}
//       </div>
//     );

// }
//   return (
//     <div className="flex justify-center h-screen w-full items-center">
//       {/* Message After Submit Form */}
//       {submitted && (
//         <p className="absolute top-0 p-4 text-green-800 bg-gray-300">
//           Form submitted successfully!
//         </p>
//       )}

//       <form
//         onSubmit={handleSubmit}
//         className="w-[28em] bg-slate-200 h-[33em] relative rounded-md shadow-md flex flex-col items-center justify-around "
//       >
//         <h1 className="text-3xl font-sans text-pink-400">Login Page</h1>

//         <input
//           className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent"
//           type="text"
//           placeholder="UserName"
//           name="userName"
//           value={values.userName}
//           onChange={handleChange}
//           autoComplete="off"
//           onBlur={handleBlur}
//         />
//         {errors.userName && touched.userName ? (
//           <p className="text-red-500 -mt-10">{errors.userName}</p>
//         ) : null}
//         <input
//           className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent"
//           type="password"
//           placeholder="Password"
//           name="userPassword"
//           autoComplete="off"
//           value={values.userPassword}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />

//         {errors.userPassword && touched.userPassword ? (
//           <p className="text-red-500 -mt-10">{errors.userPassword}</p>
//         ) : null}
//         <div className="absolute right-20 top-52 cursor-pointer">
//           <BiSolidHide size={21} />
//         </div>
//         <button
//           type="submit"
//           className="w-[30%] text-xl text-white h-[42px] rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-800 duration-300"
//         >
//           Login
//         </button>
//         <p className="mt-4">Login With</p>
//         <div className="w-[80%] h-[3em] flex justify-around">
//           {/* Google Setting */}
//           <GoogleOAuthProvider clientId={clientId}>
//             <GoogleLogin
//               onSuccess={handleGoogleLoginSuccess}
//               onError={handleGoogleLoginError}
//             />
//           </GoogleOAuthProvider>
//           {/* <button className="w-[45%] text-xl h-[90%] rounded-md bg-gray-600 hover:bg-gray-800 active:scale-90 duration-300">
//             Facebook
//           </button> */}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;












import { BiSolidHide, BiShow } from 'react-icons/bi';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useFormik } from 'formik';
import { formSchema } from "./Validation";
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import SignUp from '../SignUpPage/SignUp';

interface InitialValues {
  userName: string;
  userPassword: string;
}

const initialValues: InitialValues = {
  userName: "",
  userPassword: "",
};

const Login = () => {
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

  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    if (submitted || loggedIn) {
      const delay = 1500; 
      const timeout = setTimeout(() => {
        setShowSignUp(true);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [submitted, loggedIn]);

  return (
    <div>
      {showSignUp && <SignUp />}
      <div className="flex justify-center h-screen w-full items-center">
        {/* Message After Submit Form */}
        {submitted && (
          <p className="absolute top-0 p-4 text-green-800 bg-gray-300">
            Form submitted successfully!
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="w-[28em] bg-slate-200 h-[33em] relative rounded-md shadow-md flex flex-col items-center justify-around "
        >
          <h1 className="text-3xl font-sans text-pink-400">Login Page</h1>

          <input
            className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent"
            type="text"
            placeholder="UserName"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            autoComplete="off"
            onBlur={handleBlur}
          />
          {errors.userName && touched.userName ? (
            <p className="text-red-500 -mt-10">{errors.userName}</p>
          ) : null}
          <input
            className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent"
            type="password"
            placeholder="Password"
            name="userPassword"
            autoComplete="off"
            value={values.userPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.userPassword && touched.userPassword ? (
            <p className="text-red-500 -mt-10">{errors.userPassword}</p>
          ) : null}
          <div className="absolute right-20 top-52 cursor-pointer">
            <BiSolidHide size={21} />
          </div>
          <button
            type="submit"
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
            {/* <button className="w-[45%] text-xl h-[90%] rounded-md bg-gray-600 hover:bg-gray-800 active:scale-90 duration-300">
              Facebook
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
