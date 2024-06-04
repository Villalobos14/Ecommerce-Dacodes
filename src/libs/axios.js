import Axios from 'axios';

const axios = Axios.create({
    maxBodyLength: Infinity,
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    },
});


export default axios;
