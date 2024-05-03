import React from "react"
import Login from "./Pages/login"
import Signup from "./Pages/signup"
import Userhome from "./Pages/userhome"
import { BrowserRouter, Routes, Route } from "react-router-dom"




const App = () => {

    return (
        <>
            <BrowserRouter>


                <Routes>


                    <Route
                        path="/"
                        element={<Login />}

                    />
                    <Route
                        path="/signup"
                        element={<Signup />}

                    />
                    <Route 
                     path="/userhome"
                    element={<Userhome/>}
                    
                    
                    
                    />




                </Routes>


            </BrowserRouter>



        </>







    )





}


export default App