import React from "react";

import ScrollReveal from "./ScrollReveal";

import "./TourismCard.css";

const TourismCard = ({ place, index = 0 }) => {

    return (

        <ScrollReveal
            delay={(index % 3) * 100}
        >

            <article className="tourism-card">

                <div className="tourism-number">
                    {String(index + 1).padStart(2, "0")}
                </div>

                <div className="tourism-icon">
                    🗺️
                </div>

                <div className="tourism-content">

                    <span>
                        DESTINATION
                    </span>

                    <h3>
                        {place.name}
                    </h3>

                    <p>
                        {place.description}
                    </p>

                </div>

                <div className="tourism-arrow">
                    →
                </div>

            </article>

        </ScrollReveal>

    );
};

export default TourismCard;