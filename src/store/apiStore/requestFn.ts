import axios from "axios"
export const getJsonData=(url:string,params:object):any=>{
    return axios.get(url,{params:params});
};
export const postJsonData=(url:string,params:object):any=>{
    return axios.post(url,params);
};
export const postFormData=(url:string,params:FormData):any=>{
    return axios.post(url,params,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    });
}