import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionCostants"

const logOutState = {
    isLogin: false,
    username: undefined, 
    userId : undefined,
    email : undefined,
    
  }

  const authStateReducer =(state = {...logOutState},action) =>{
    if(action.type === LOGOUT_SUCCESS){
      return logOutState
    }else if(action.type ===LOGIN_SUCCESS){
        const data = action.payload
        const {userId,email,name} = data
        const payload = {
            username : name,
            isLogin : true,
            userId ,
            email,

        }
        return payload
    }
    return state
  }

  export default authStateReducer;