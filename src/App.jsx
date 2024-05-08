import React from "react"
import Login from "./Pages/login"
import Signup from "./Pages/signup"
import Userhome from "./Pages/userhome"
import EditMovie from "./Pages/editmovie"
import { Provider } from "react-redux"
import Store from "./redux/store"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Addmovieform from "./Pages/Addmovie"
import { MovieProvider } from './context/moviecontext';
import Adminhome  from "./Pages/Adminhome"



const App = () => {

    return (
        <>

            <Provider store={Store}>

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
                            element={<Userhome />}



                        />
                        <Route
                            path="/editmovie"

                            element={EditMovie}

                        >


                        </Route>

                        <Route

                            path="/addmovie"
                            element={

                                <MovieProvider>
                                    <Addmovieform />

                                </MovieProvider>
                            }


                        />


                        <Route

                            path="/adminhome"
                            element={

                                <Adminhome > </Adminhome>

                            }




                        />







                    </Routes>


                </BrowserRouter>

            </Provider>

        </>







    )





}


export default App