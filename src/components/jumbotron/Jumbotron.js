import React from "react";

import "./Jumbotron.css";

const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container titleJumbo">
                <h1 className="display-4">{props.title}</h1>
            </div>
        </div>
    );
};

export default Jumbotron;