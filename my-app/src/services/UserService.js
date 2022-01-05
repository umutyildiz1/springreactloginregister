import axios from "axios";

class UserService {
    createUser(requestBody){
        //axios.post //(api url, request body(json))
        return axios.post("/api/1.0/users/createUser",requestBody)
        
    }

    logIn(token){
        return axios.post("/api/1.0/auth/handle",{},{auth:token})
    }
}
export default UserService