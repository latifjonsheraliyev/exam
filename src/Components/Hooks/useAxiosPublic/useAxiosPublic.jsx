import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://dev-daynamos-fashion-house-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;
// https://dev-daynamos-fashion-house-server.vercel.app
// http://localhost:5000/