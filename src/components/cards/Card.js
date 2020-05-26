import React from "react";

const Card = (props) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 mt-1">
            <div className="col mb-4">
                <div className="card">
                    <img src={props.image} class="card-img-top" alt="world-map" />
                    <div className="card-body">
                        <p className="card-text">{props.text}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;