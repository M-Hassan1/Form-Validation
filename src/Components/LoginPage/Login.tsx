"use client"
import { BiSolidHide, BiShow } from 'react-icons/bi'
import { useFormik } from 'formik';
import { formSchema } from "./Validation";


interface InitialValues {
  userName: string;
  userPassword: string;
}


const initialValues: InitialValues = {
  userName: "",
  userPassword: "",
};

const Login = () => {
  const {values, errors, handleBlur, handleChange, touched, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("values", values);
    }
  });

  return (
    <div className="flex justify-center h-screen w-full items-center">
      <form onSubmit={handleSubmit} className="w-[28em] bg-slate-200 h-[33em] relative rounded-md shadow-md flex flex-col items-center justify-around ">
        <h1 className="text-3xl font-sans text-pink-400 ">
          Login Page
        </h1>
      
        <input
          className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent"
          type="text"
          placeholder="UserName"
          name="userName"
          value={values.userName}
          onChange={handleChange}
          autoComplete='off'
          onBlur={handleBlur}
        />
        { errors.userName && touched.userName ? (<p className='text-red-500 -mt-10'>{errors.userName}</p>) : null }
        <input
          className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent"
          type="password"
          placeholder="Password"
          name="userPassword"
          autoComplete='off'
          value={values.userPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        
        { errors.userPassword && touched.userPassword ? (<p className='text-red-500 -mt-10'>{errors.userPassword}</p>) : null }
        <div className="absolute right-20 top-52 cursor-pointer">
          <BiSolidHide size={21} />
        </div>
        <button type='submit'
          className="w-[30%] text-xl text-white h-[42px] rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-800 duration-300"
          // onSubmit={handleSubmit}
        >
          Login
        </button>
        <p className="mt-4">Login With</p>
        <div className="w-[80%] h-[3em] text-white flex justify-around">
          <button className="w-[45%] text-xl h-[90%] rounded-md bg-gray-600 hover:bg-gray-800 active:scale-90 duration-300">
            Google
          </button>
          <button className="w-[45%] text-xl h-[90%] rounded-md bg-gray-600 hover:bg-gray-800 active:scale-90 duration-300">
            Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
