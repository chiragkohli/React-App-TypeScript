import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {'Content-type': 'application/json'}
});

instance.defaults.headers.post['Content-type']= 'application/json';

export default instance;