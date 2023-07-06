import {FcGoogle} from 'react-icons/fc'


const Login = () => {
return(
    <div className="flex justify-center h-screen w-full items-center">
        <form className="w-[28em] bg-slate-200 h-[33em] relative rounded-md shadow-md flex flex-col items-center justify-around ">
            <h1 className="text-3xl text-pink-400 " >
                Login Page
                </h1>
            <input className="w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent" type="text" placeholder="UserName" />
            <input className=" w-[72%] h-[2em] border-b outline-none border-black text-xl bg-transparent" type="password" placeholder="Password" />
            <button className="w-[30%] text-xl text-white h-[45px] rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-800 duration-300 ">
                Login
                </button>
            <p className="mt-4">
                Login With
            </p>
            <div className="w-[80%] h-[3em] text-white flex justify-around">
                <button className="w-[45%] text-xl h-[90%] rounded-md bg-gray-600 hover:bg-gray-800 active:scale-90 duration-300 ">Google</button>
                <button className="w-[45%] text-xl h-[90%] rounded-md bg-gray-600 hover:bg-gray-800 active:scale-90 duration-300 " >Facebook</button>



        </div>
    </form>
    </div>
)

}
export default Login;