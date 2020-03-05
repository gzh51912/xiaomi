import axios from "./index";

export const getClassify=()=>{
        return axios.get("/classify");
    }
