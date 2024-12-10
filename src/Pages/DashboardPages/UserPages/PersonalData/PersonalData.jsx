import React from 'react';
import { FaRegUser, FaMapMarkerAlt } from 'react-icons/fa'; // Updated for location icon
import { FiPhone } from 'react-icons/fi';
import { MdMarkEmailUnread } from 'react-icons/md';
import PopUpModal from './PopUpModal';
import useAuth from '../../../../Components/Hooks/useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../Components/Hooks/useAxiosPublic/useAxiosPublic';

const PersonalData = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic()
    // Get all users
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosPublic.get(`/users/single/${user.email}`)
            return result.data
        }
    })
    console.log(users)
    return (
        <div className="max-w-5xl mx-auto p-6 bg-blue-50 rounded-lg shadow-lg mt-10"> {/* Changed body color to light blue */}
            {/* Header */}
            <div className='mb-8 text-center'>
                <h1 className="text-4xl font-bold text-gray-800 hover:text-teal-600 transition-colors">
                    Profile Overview
                </h1>
                <p className="text-lg text-gray-600">Manage your personal information and settings</p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between w-full"> {/* Full width for card */}
                {/* Image Section */}
                <div className="flex justify-center mb-6 lg:w-1/3 lg:mb-0 lg:mr-8">
                    <img
                        src={users?.photoURL || "https://via.placeholder.com/150"} // Placeholder if no image
                        alt="Personal"
                        className="w-40 h-40 rounded-full object-cover border-4 border-teal-500 shadow-lg"
                    />
                </div>

                {/* Data Section */}
                <div className="w-full lg:w-2/3 lg:pr-12">
                    {/* Edit button */}
                    <div className="flex justify-end mb-4">
                        <PopUpModal user={users} refetch={refetch} />
                    </div>

                    {/* Info Fields */}
                    <div className="space-y-6">
                        {/* Full Name & Email */}
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                            {/* Full Name */}
                            <div className="flex-1">
                                <span className="block text-sm text-gray-500">Full Name</span>
                                <div className="flex items-center bg-gray-50 hover:bg-teal-100 py-4 pr-4 pl-3 border border-gray-300 rounded-lg gap-3 mt-1 shadow-sm w-full"> {/* Full width for input */}
                                    <FaRegUser className="w-6 h-6 text-gray-600" />
                                    <span className="font-medium text-nowrap text-lg text-gray-800">{users?.name || 'Not Provided'}</span>
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="flex-1"> {/* Full width */}
                                <span className="block text-sm text-gray-500">Email Address</span>
                                <div className="flex items-center bg-gray-50 hover:bg-teal-100 py-4 pr-4 pl-3 border border-gray-300 rounded-lg gap-3 mt-1 shadow-sm w-full"> {/* Full width for input */}
                                    <MdMarkEmailUnread className="w-6 h-6 text-gray-600" />
                                    <span className="font-medium text-lg text-gray-800 whitespace-nowrap">
                                        {users?.email ? users.email.length > 22 ? users.email.slice(0, 22) + '...' : users.email : 'Not Provided'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Phone & Location */}
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                            {/* Phone Number */}
                            <div className="flex-1"> {/* Full width */}
                                <span className="block text-sm text-gray-500">Phone Number</span>
                                <div className="flex items-center bg-gray-50 hover:bg-teal-100 py-4 pr-4 pl-3 border border-gray-300 rounded-lg gap-3 mt-1 shadow-sm w-full"> {/* Full width for input */}
                                    <FiPhone className="w-6 h-6 text-gray-600" />
                                    <span className="font-medium text-lg text-gray-800">{users?.phone || 'Not Provided'}</span>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex-1"> {/* Full width */}
                                <span className="block text-sm text-gray-500">Location</span>
                                <div className="flex items-center bg-gray-50 hover:bg-teal-100 py-4 pr-4 pl-3 border border-gray-300 rounded-lg gap-3 mt-1 shadow-sm w-full"> {/* Full width for input */}
                                    <FaMapMarkerAlt className="w-6 h-6 text-gray-600" />
                                    <span className="font-medium text-lg text-gray-800">{users?.address || 'Not Provided'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
