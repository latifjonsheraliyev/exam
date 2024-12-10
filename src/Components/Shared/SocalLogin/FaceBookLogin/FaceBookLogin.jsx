import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const FacebookLogin = () => {
    return (
        <div>
            <button className="flex justify-between items-center gap-5 mx-auto mb-4 mt-8  rounded-md border px-5 py-2 shadow-lg duration-200  dark:hover:text-white w-full hover:bg-blue-500">
                <FaFacebook className="text-xl" />
                Continue with Facebook
            </button>
        </div>
    );
};

export default FacebookLogin;