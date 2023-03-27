import axios from 'axios';
import toastr from 'toastr';


const base_url = import.meta.env.VITE_BASE_URL;

export { base_url };

const sessionId = localStorage.getItem('sessionId');

const instance = axios.create({
    baseURL: base_url,
    headers: {
        agent: 'browser',
        Authorization: "Bearer " + sessionId,
    },
    timeout: 1000 * 60
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (
            error?.response?.status === 403 ||
            error?.response?.data?.message === 'You are not logged in'
        ) {
            toastr.error('You are not loggedIn.');
            localStorage.clear();
            window.location.replace('/login');
        } else if (error.code === 'ERR_NETWORK') {
            toastr.error('Internet connection lost!');
        } else {

            const err = error?.response?.data;
            toastr.error(err?.title || err?.message || 'Something went wrong');
        }
        return Promise.reject(error);
    }
);

export { instance };