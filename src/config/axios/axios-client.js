import axios from "axios";

const SERVER_URL = 'http://192.168.74.87:82'

const AxiosClient = axios.create({
    baseURL: SERVER_URL
});



export default AxiosClient;
