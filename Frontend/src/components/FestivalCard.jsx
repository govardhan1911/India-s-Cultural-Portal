import React from "react";

import ScrollReveal from "./ScrollReveal";

import "./FestivalCard.css";

const FestivalCard = ({ festival, index = 0 }) => {

    return (

        <ScrollReveal
            delay={(index % 4) * 100}
        >

            <article className="festival-card">

                <div className="festival-image">

                    {festival.image ? (

                        <img
                            src={festival.image}
                            alt={festival.name}
                        />

                    ) : (

                        <div className="festival-placeholder">
                            🎉
                        </div>

                    )}

                    <div className="festival-image-overlay">
                        <span>✦</span>
                    </div>

                </div>

                <div className="festival-content">

                    <span className="card-category">
                        FESTIVAL
                    </span>

                    <h3>
                        {festival.name}
                    </h3>

                    <p>
                        {festival.description}
                    </p>

                    {festival.state && (
                        <span className="festival-state">
                            📍 {festival.state.name}
                        </span>
                    )}

                </div>

            </article>

        </ScrollReveal>

    );
};

export default FestivalCard;