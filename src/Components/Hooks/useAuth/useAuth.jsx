import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;

// Handle form submission
// const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     try {
//         const response = await axiosPublic.patch(`/users/upProfile/${user?.email}`, formData); // Use the PATCH method
//         if (response.status === 200) {
//             console.log('Profile updated successfully:', response.data);
//             document.getElementById('my_modal_3').close();
//             toast.success('Successfully updated your profile!');
//             refetch(); // Refetch to get updated user data
//         } else {
//             console.error('Failed to update profile:', response.data);
//         }
//     } catch (error) {
//         console.error('Error updating profile:', error);
//     }
//     console.log(formData)
// };