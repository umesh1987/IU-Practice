import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./PageHeader.css";

const PageHeader = () => {

    const history = useHistory();
    // this function refresh the page when ckick the logout button
    const refreshPage = () => {
        history.push("/");
        window.location.reload();

    }

    return (
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-item-center">
                <div className="col-4 pt-1 subscribe">
                    <Link to="/dashbord">Subscribe</Link>
                </div>
                <div className="col-4 text-center">
                    <Link to="/dashbord">SHRESTHA</Link>
                </div>
                <div className="col-4 d-flex justify-content-end align-item-center">
                    <i className="fas fa-search"></i>
                    <button onClick={refreshPage} className="btn btn-sm btn-outline-secondary">Logout</button>
                </div>
            </div>
            <hr />
        </header>
    );
};

export default PageHeader;