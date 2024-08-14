import axios from "axios";

const request = axios.create({

    baseURL: 'http://123.60.85.23:9500',

    timeout: 3000
    
})

export default request;