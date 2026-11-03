import React from "react";

import ScrollReveal from "./ScrollReveal";

import "./HeritageCard.css";

const HeritageCard = ({ item, index = 0 }) => {

    return (

        <ScrollReveal
            delay={(index % 3) * 100}
        >

            <article className="heritage-card">

                <div className="heritage-icon">
                    🏛️
                </div>

                <span>
                    HERITAGE
                </span>

                <h3>
                    {item.name}
                </h3>

                <p>
                    {item.description}
                </p>

                <div className="heritage-line"></div>

                <div className="heritage-arrow">
                    Explore →
                </div>

            </article>

        </ScrollReveal>

    );
};

export default HeritageCard;