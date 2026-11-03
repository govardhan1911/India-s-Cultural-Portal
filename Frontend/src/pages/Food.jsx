import React, { useEffect, useState } from "react";

import { getFoods } from "../services/api";

import "./ContentPage.css";

const Foods = () => {

    const [foods, setFoods] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        const loadFoods = async () => {

            try {

                const data = await getFoods();

                setFoods(data);

            } catch (err) {

                console.error(err);

                setError(
                    "Unable to load food data."
                );

            } finally {

                setLoading(false);

            }

        };

        loadFoods();

    }, []);


    return (
        <div className="content-page">

            <div className="content-heading">

                <span>
                    INDIAN CUISINE
                </span>

                <h1>
                    Flavours of India
                </h1>

                <p>
                    Explore India's diverse traditional
                    food and cuisine.
                </p>

            </div>


            {loading && (
                <div className="content-message">
                    Loading food...
                </div>
            )}


            {error && (
                <div className="content-error">
                    {error}
                </div>
            )}


            {!loading && !error && (

                <div className="content-grid">

                    {foods.map((food) => (

                        <div
                            className="content-card"
                            key={food.id}
                        >

                            <div className="content-card-image">
                                🍛
                            </div>

                            <div className="content-card-body">

                                <h2>
                                    {food.name}
                                </h2>

                                <p>
                                    {food.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default Foods;