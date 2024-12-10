import React from 'react';
import { MdEditSquare, MdOutlineDownloadDone } from 'react-icons/md';
import { useForm } from 'react-hook-form'; // Import useForm from React Hook Form
import useAxiosPublic from '../../../../Components/Hooks/useAxiosPublic/useAxiosPublic';
import { toast } from 'react-toastify';

const PopUpModal = ({ user, refetch }) => {
    const axiosPublic = useAxiosPublic();
    console.log(user)
    // Initialize React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            phone: user?.phone || '',
            photoURL: user?.photoURL || '',
            address: user?.address || '' // Assuming 'address' refers to 'location'
        }
    });

    // Submit handler
    const onSubmit = async (data) => {
        try {
            const response = await axiosPublic.patch(`/users/upProfile/${user?.email}`, data); // Send form data
            if (response.status === 200) {
                toast.success('Successfully updated your profile!');
                refetch(); // Refetch data after update
                document.getElementById('my_modal_3').close(); // Close modal
            } else {
                toast.error('Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('An error occurred while updating.');
        }
        console.log(data)
    };

    return (
        <div>
            {/* Button to open the modal */}
            <button onClick={() => document.getElementById('my_modal_3').showModal()}>
                <MdEditSquare className='w-8 h-8 hover:text-teal-600' />
            </button>

            {/* Modal dialog */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    {/* Close button */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-2xl hover:text-teal-500 text-center">Edit Personal Data!</h3>

                    {/* Form section */}
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered"
                                value={user.name}
                                {...register('name', { required: true })} // Use register here
                            />
                            {errors.name && <p className="text-red-500">Name is required</p>}
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                value={user.email} // Use value directly for email
                                disabled
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Phone"
                                className="input input-bordered"
                                value={user.phone}
                                {...register('phone', { required: true })} // Use register here
                            />
                            {errors.phone && <p className="text-red-500">Phone is required</p>}
                        </div>

                        {/* Image URL Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Image URL"
                                value={user?.photoURL}
                                className="input input-bordered"
                                {...register('photoURL', { required: true })} // Use register here
                            />
                            {errors.photoURL && <p className="text-red-500">Image URL is required</p>}
                        </div>

                        {/* Location Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                value={user?.address}
                                placeholder="Location"
                                className="input input-bordered"
                                {...register('address', { required: true })} // Use register here
                            />
                            {errors.address && <p className="text-red-500">Location is required</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn rounded-lg bg-gray-700 text-white border-white border-2 hover:text-gray-700 hover:border-gray-700 hover:bg-white text-xl flex items-center"
                            >
                                <MdOutlineDownloadDone /> Submit
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default PopUpModal;
