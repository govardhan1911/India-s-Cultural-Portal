import React from "react";

import ScrollReveal from "./ScrollReveal";

import "./FoodCard.css";

const FoodCard = ({ food, index = 0 }) => {

    return (

        <ScrollReveal
            delay={(index % 4) * 100}
        >

            <article className="food-card">

                <div className="food-image">

                    {food.image ? (

                        <img
                            src={food.image}
                            alt={food.name}
                        />

                    ) : (

                        <div className="food-placeholder">
                            🍛
                        </div>

                    )}

                    <div className="food-floating-icon">
                        ✦
                    </div>

                </div>

                <div className="food-content">

                    <span className="card-category">
                        CUISINE
                    </span>

                    <h3>
                        {food.name}
                    </h3>

                    <p>
                        {food.description}
                    </p>

                    {food.state && (
                        <span className="food-state">
                            📍 {food.state.name}
                        </span>
                    )}

                </div>

            </article>

        </ScrollReveal>

    );
};

export default FoodCard;