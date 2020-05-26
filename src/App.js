import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UserLogin from "./pages/userLogin/UserLogin";
import Dashbord from "./pages/dashbord/Dashbord";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <UserLogin />
            </Route>

            <Route exact path="/dashbord">
                <Dashbord />
            </Route>

        </BrowserRouter>
    );
};

export default App;