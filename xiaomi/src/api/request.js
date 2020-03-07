import axios from "./index";

export const getClassify=()=>{
        return axios.get("/classify");
}

export const getStarData=()=>{
    return axios.get("/star");
}
