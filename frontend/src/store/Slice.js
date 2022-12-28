import { createSlice } from '@reduxjs/toolkit'


const authSlice= createSlice({
    name:"auth",
    initialState:{
        email:"",
        password:"",
        confirmPassword:""
    },
    reducers:{
        login(state, action){
           let user=action.payload
            state.email=user.email
            state.password=user.password
            console.log(state.email, state.password);
        },
        register(state,action){
            let user=action.payload
            state.email=user.email
            state.password=user.password
            state.confirmPassword=user.confirmPassword
        }
    }
})

export const authActions=authSlice.actions 
export default authSlice