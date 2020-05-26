import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./UserLogin.css";

class UserLogin extends Component {

    // Initial the state
    state = {
        userName: "",
        password: "",
        isLogin: false
    }

    userNameChangeHandler = (event) => {
        // Getting the value and name of the input
        const { name, value } = event.target;
        // Updating the state
        this.setState({ [name]: value });

    };

    formSubnitHandler = (event) => {
        // Preventing the default behavior
        event.preventDefault()
        // Validate input if userName and password are empty
        if (this.state.userName === "" && this.state.password === "") {
            alert("Please, enter userName and password")
        } else if (this.state.userName === "us" && this.state.password === "us") {
            localStorage.setItem("token", "shrestha");
            this.setState({ isLogin: true });
        } else {
            // Alert the user with userName and password value
            alert(`Your user name is: ${this.state.userName} \nYour password is: ${this.state.password}`)

            // Clear the inpute fields
            this.setState({ userName: "" });
            this.setState({ password: "" });
        }
    }

    formCancleHandler = (event) => {
        event.preventDefault();
        // Alert the user if user click the cancle button
        alert("You click the CANCLE button.");

        // Clear the inpute fields
        this.setState({ userName: "" });
        this.setState({ password: "" });
    }

    render() {

        if (this.state.isLogin) {
            return <Redirect to="/dashbord" />
        };

        return (
            <div className="login-card">
                <div className="login-card__title">
                    <h2 className="card-title__header">Login</h2>
                    <hr />
                </div>
                <form onSubmit={this.formSubnitHandler}>

                    <label>E-mail or Username</label>
                    <input
                        onChange={this.userNameChangeHandler}
                        type="text"
                        name="userName"
                        placeholder="E-mail or Username"
                        value={this.state.userName}
                    />

                    <label>Password</label>
                    <input
                        onChange={this.userNameChangeHandler}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                    />

                    <div className="login-btn">
                        <button className="cancle" onClick={this.formCancleHandler}>Cancle</button>
                        <button className="login" onClick={this.formSubnitHandler}>Login</button>
                    </div>
                </form>
            </div>
        );
    };
};

export default UserLogin;