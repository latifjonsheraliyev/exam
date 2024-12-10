import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext, useEffect } from 'react';

const axiosSecure = axios.create({
    baseURL: 'https://dev-daynamos-fashion-house-server.vercel.app',
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    useEffect(() => {
        // Request interceptor
        const requestInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers.authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response interceptor for handling 401 and 403 errors
        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error?.response?.status;
                if (status === 401 || status === 403) {
                    await logOut();  // Log out the user
                    localStorage.removeItem('access-token');  // Remove the token
                    navigate('/login', { replace: true });  // Navigate to login
                }
                return Promise.reject(error);  // Pass the error along
            }
        );

        // Clean up the interceptors when the component unmounts
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
// https://dev-daynamos-fashion-house-server.vercel.app
// http://localhost:5000/