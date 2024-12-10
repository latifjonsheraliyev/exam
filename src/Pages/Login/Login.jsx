import React, { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/form/login.gif";
import GoogleLogin from "../../Components/Shared/SocalLogin/GoogleLogin/GoogleLogin";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // State for show password
  const location = useLocation();
  const navigate = useNavigate();

  const formLocation = location?.state?.form?.pathname || "/";

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const { signIn, user } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate(formLocation, { replace: true })
    });
  };
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Update the checkbox state
  };

  return (
    <div className="container mx-auto">
      <div className="flex  items-center justify-center mt-10  md:p-0">
        <div className="md:flex items-center  h-full w-full overflow-hidden space-y-5 p-5">
          {/* design side  */}
          <div className="flex flex-col items-center h-full mx-auto ">
            <img src={loginImg} alt="login img" className="object-cover" />
          </div>
          {/* form side  */}
          <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg ">
            <h1 className="text-3xl text-center font-bold mb-3">
              Sign In Tech Heim
            </h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="text-sm ">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-blue-500 focus:ring-1 focus-visible:outline-blue-500 "
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                />
              </div>
              <div className=" text-sm relative flex flex-row items-center">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-blue-500 focus:ring-1 focus-visible:outline-blue-500"
                  placeholder="password"
                  name="password"
                  type={`${!showPassword ? "password" : "text"}`}
                  required
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute right-2 cursor-pointer"
                >
                  {showPassword ? <BiSolidShow /> : <BiSolidHide />}
                </span>
              </div>
              {/* Forgot Password & Keep me signed in Checkbox Section Start */}
              <div className="flex justify-between">
                <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                  <input
                    type="checkbox"
                    id="keep_signed_in"
                    onChange={handleCheckboxChange} // Set checkbox state on change
                  />
                  <label
                    className="select-none text-sm font-medium"
                    htmlFor="keep_signed_in"
                  >
                    Keep me signed in
                  </label>
                </div>
                <div className="flex justify-end text-xs">
                  <a href="#" className="hover:underline ">
                    Forgot Password?
                  </a>
                </div>
              </div>
              {/* Forgot Password & Keep me signed in Checkbox Section End */}
              <button
                type="submit"
                disabled={!isChecked} // Button is disabled if checkbox is unchecked
                className={`mx-auto form-control w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 bg-blue-500 hover:bg-blue-700 text-white ${!isChecked ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                Submit
              </button>
            </form>
            <p className="text-center text-sm">
              Don&apos;t have an account?
              <Link
                to="/register"
                className="font-semibold underline text-blue-500"
              >
                Signup
              </Link>
            </p>
            <div className="my-8 flex items-center">
              <hr className="flex-1 border-gray-400" />
              <div className="mx-4 text-gray-400">OR</div>
              <hr className="flex-1 border-gray-400" />
            </div>
            {/* Social icons */}
            <GoogleLogin />
            {/* <FacebookLogin /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
