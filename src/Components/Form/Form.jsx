import React, { useState } from 'react';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

const Form = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div>
      {/* <Register /> */}
      <Login />
    </div>

    // <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg  bg-white  ">
    //   <div
    //     className={`flex select-none gap-2 border-b p-2.5 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none  ${signUp
    //       ? "last-of-type:*:bg-blue-500 last-of-type:*:text-white"
    //       : "first-of-type:*:bg-blue-500 first-of-type:*:text-white"
    //       }`}
    //   >
    //     <button onClick={() => setSignUp(false)}>signin</button>
    //     <button onClick={() => setSignUp(true)}>signup</button>
    //   </div>

    //   <div className="w-full flex-col items-center overflow-hidden p-4 sm:p-8">

    //   <Regastration />
    //   <Login />

    //     {/* sign In form */}
    //     {/* <form
    //       onSubmit={handleLogin}
    //       className={`${signUp ? "h-0 opacity-0" : "h-full duration-300"
    //         } space-y-3 sm:space-y-5`}
    //     >
    //       <h1 className="mb-3 uppercase sm:mb-5 sm:text-2xl font-bold">
    //         Sign In to Tech Heim
    //       </h1>
    //       <input
    //         type="email"
    //         name="email"
    //         required
    //         placeholder="Email"
    //         className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
    //       />
    //       <div className="relative flex flex-row items-center">
    //         <input
    //           type={`${!showPassword ? "password" : "text"}`}
    //           placeholder="Password"
    //           required
    //           name="password"
    //           className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
    //         />
    //         <span
    //           onClick={handleShowPassword}
    //           className="absolute right-2 cursor-pointer"
    //         >
    //           {showPassword ? <BiSolidShow /> : <BiSolidHide />}
    //         </span>
    //       </div>

    //       <div className="flex justify-between">
    //         <div className="mb-6 flex items-center space-x-2 accent-sky-600">
    //           <input
    //             type="checkbox"
    //             id="keep_signed_in"
    //             onChange={handleCheckboxChange} 
    //           />
    //           <label
    //             className="select-none text-sm font-medium"
    //             htmlFor="keep_signed_in"
    //           >
    //             Keep me signed in
    //           </label>
    //         </div>

    //         <p className="text-left text-sm text-blue-500">
    //           <a href="#" className="hover:underline">
    //             Forget password?
    //           </a>
    //         </p>
    //       </div>


    //       <button
    //         type="submit"
    //         disabled={!isChecked} 
    //         className={`mx-auto form-control w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 bg-blue-500 hover:bg-blue-700 text-white ${!isChecked ? "opacity-50 cursor-not-allowed" : ""
    //           }`}
    //       >
    //         Submit
    //       </button>

    //       <p className="text-center">
    //         Don&apos;t have an account?
    //         <button
    //           onClick={() => setSignUp(!signUp)}
    //           type="button"
    //           className="font-semibold underline text-blue-500"
    //         >
    //           Sign Up
    //         </button>
    //       </p>
    //     </form> */}

    //     {/* <div className="mt-3 space-y-3 sm:space-y-5">
    //       <div className="divider">OR</div>
    //       Socal Login
    //       <GoogleLogin />
    //       <FaceBookLogin />
    //     </div> */}

    //   </div>
    // </div>
  );
};

export default Form;