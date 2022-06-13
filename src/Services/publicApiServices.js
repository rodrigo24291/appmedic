import axios from 'axios';
import { errorAlert } from './alertServices';

const get = async(url) => {

    const response = {};

    try {
        const data = axios.get(url);
        response.data = await data;
    } catch (err) {
        response.error = err;
        errorAlert(`Error al realizar la peticion: ${response.error.status}`,response.error.message);
    }

    return response;
}

export { get };