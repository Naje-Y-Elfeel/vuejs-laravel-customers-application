import Axios from "axios"

export function login(credentials){
    return new Promise( (response, rejection) => {
        Axios.post('/api/auth/login', credentials).then( (res)=> {
            response(res.data);
        }).catch( (error)  => {
            rejection("Wrong Email or Password");
        })
    })
}

export function getLocalUser(){
    const userStr = localStorage.getItem("user");

    if(!userStr){
        return null;
    }
    return JSON.parse(userStr);
}