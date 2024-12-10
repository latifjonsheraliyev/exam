import React, { useContext, useEffect, useState } from "react";
import registrationImg from "../../assets/form/registration.gif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import GoogleLogin from "../../Components/Shared/SocalLogin/GoogleLogin/GoogleLogin";
// import FaceBookLogin from "../../Components/Shared/SocalLogin/FacebookLogin/FacebookLogin";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false); // State for show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const axiosPublic = useAxiosPublic()
  const [isCheckedSignUP, setIsCheckedSignUp] = useState(false); // State for checkbox
  const { createUser, user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const formLocation = location?.state?.form?.pathname || '/'


  const onSubmit = (data) => {
    // firebase addition can not provide the name field. So I took the name field from to from
    const name = data?.name;
    console.log(data);
    createUser(data?.email, data?.password)
      .then((result) => {
        console.log(result)
        const userInfo = {
          name: name,
          email: data?.email
        }
        axiosPublic.post('users', userInfo)
          .then((data) => {

            console.log('user added to the data base', data.data)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Log-In",
              showConfirmButton: false,
              timer: 1500
            });


          })
        navigate(formLocation, { replace: true })
      });
  };

  const handleCheckboxChangeSignUp = (e) => {
    setIsCheckedSignUp(e.target.checked); // Update the checkbox state
  };

  return (
    <div className="container mx-auto">
      <div className="flex  items-center justify-center mt-10  md:p-0">
        <div className="md:flex items-center  h-full w-full overflow-hidden space-y-5 p-5">
          {/* design side  */}
          <div className="flex flex-col items-center h-full mx-auto ">
            <img
              src={registrationImg}
              alt="login img"
              className="object-cover"
            />
          </div>
          {/* form side  */}
          <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg ">
            <h1 className="text-3xl text-center font-bold mb-3">
              Sign Up to Tech Heim
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="text-sm ">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-blue-500 focus:ring-1 focus-visible:outline-blue-500 "
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  {...register("name")}
                />
              </div>
              <div className="text-sm ">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-blue-500 focus:ring-1 focus-visible:outline-blue-500 "
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  {...register("email")}
                />
              </div>
              <div className=" text-sm relative flex flex-row items-center">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm border-blue-500 focus:ring-1 focus-visible:outline-blue-500"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
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
              {/* error validation  */}
              {errors.password?.type === "required" && (
                <p className="text-red-600 mt-2">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 mt-2">
                  Password must be 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 mt-2">
                  Password must be less then 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 mt-2">
                  Password must one upper case, one lower case, one number, one
                  special characters
                </p>
              )}
              {/* Forgot Password & Keep me signed in Checkbox Section Start */}
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="keep_signed_in"
                  onChange={handleCheckboxChangeSignUp} // Attach onChange to input
                />
                <label
                  className="select-none text-sm font-medium"
                  htmlFor="keep_signed_in"
                >
                  I agree to all{" "}
                  <Link to="">
                    <span className="text-blue-500 underline">
                      Terms & Conditions
                    </span>
                  </Link>
                </label>
              </div>
              {/* Forgot Password & Keep me signed in Checkbox Section End */}
              <button
                type="submit"
                disabled={!isCheckedSignUP} // Button is disabled if checkbox is unchecked
                className={`mx-auto form-control w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 bg-blue-500 hover:bg-blue-700 text-white ${!isCheckedSignUP ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                Submit
              </button>
            </form>
            <p className="text-center text-sm">
              Don&apos;t have an account?
              <Link
                to="/login"
                className="font-semibold underline text-blue-500"
              >
                SignIn
              </Link>
            </p>
            <div className="my-8 flex items-center">
              <hr className="flex-1 border-gray-400" />
              <div className="mx-4 text-gray-400">OR</div>
              <hr className="flex-1 border-gray-400" />
            </div>
            {/* Social icons */}
            <GoogleLogin />
            {/* <FaceBookLogin /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
