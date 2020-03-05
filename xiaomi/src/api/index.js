import axios from "axios";

let service = axios.create({
    baseURL:"http://localhost:4000"
})

service.interceptors.request.use((config)=>{
    console.log("request");
    return config;
})

service.interceptors.response.use((res)=>{
    console.log("response");
    return res;
})

export default service; 