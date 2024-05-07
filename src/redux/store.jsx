import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { LoadState,SaveState } from "./localstorage";


const persistedState =LoadState()
const store = configureStore({


reducer:{
user:userReducer


},

preloadedState:persistedState,


})

store.subscribe(()=>{


SaveState({


    user:store.getState().user,
})


})

export default store;