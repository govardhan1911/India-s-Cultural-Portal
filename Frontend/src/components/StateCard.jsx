import React from "react";
import { useNavigate } from "react-router-dom";

import "./StateCard.css";

const StateCard = ({ state }) => {

    const navigate = useNavigate();


    const handleClick = () => {

        navigate(`/states/${state.id}`);

    };


    return (

        <div
            className="state-card"
            onClick={handleClick}
        >

            <div className="state-image">

                {state.imageUrl ? (

                    <img
                        src={state.imageUrl}
                        alt={state.name}
                    />

                ) : (

                    <div className="no-image">
                        🇮🇳
                    </div>

                )}

            </div>


            <div className="state-card-content">

                <span className="state-type">
                    {state.type}
                </span>


                <h3>
                    {state.name}
                </h3>


                {state.capital && (

                    <p>
                        Capital: {state.capital}
                    </p>

                )}


                <span className="explore-state">
                    Explore →
                </span>

            </div>

        </div>
    );
};

export default StateCard;