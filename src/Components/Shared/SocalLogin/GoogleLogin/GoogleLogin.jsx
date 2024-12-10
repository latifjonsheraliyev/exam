import React, { useContext, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';
import Swal from 'sweetalert2';

const GoogleLogin = () => {
    const { googleSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    //location pathname
    const formLocation = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(data => {
                if (data?.user?.email) {
                    const userInfo = {
                        email: data?.user?.email,
                        name: data?.user?.displayName,
                        photoURL: data?.user?.photoURL
                    }
                    axiosPublic.post('/users', userInfo)
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
                }
                navigate(formLocation, { replace: true })
            })
    }

    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                className="flex justify-between items-center gap-5 mx-auto mb-4 mt-8  rounded-md border px-5 py-2 shadow-lg duration-200  dark:hover:text-white w-full hover:bg-blue-500">
                <FaGoogle className="text-xl" />
                Continue with Google
            </button>
        </div>
    );
};

export default GoogleLogin;