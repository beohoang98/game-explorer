import Axios from "axios";

export const axiosInstance = Axios.create({
    baseURL: "https://api.rawg.com/api",
    withCredentials: false,
    params: {
        key: process.env.REACT_APP_RAWG_API_KEY,
    },
});
