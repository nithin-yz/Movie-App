import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({

name:"user",
initialState :{
userDetails:null,

},




reducers:{
saveUserDetails:(state, action)=>{

const {confirmPassWord, ...userData} =action.payload
state.userDetails =userData
}},
LogoutUser:(state)=>{

state.userDetails =null;

}


})  

export const {saveUserDetails,logoutUser} =userSlice.actions;
export default userSlice.reducer;