import React, { useEffect, useState } from "react";

import { getTourism } from "../services/api";

import "./ContentPage.css";

const Tourism = () => {

    const [places, setPlaces] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        const loadTourism = async () => {

            try {

                const data = await getTourism();

                setPlaces(data);

            } catch (err) {

                console.error(err);

                setError(
                    "Unable to load tourism data."
                );

            } finally {

                setLoading(false);

            }

        };

        loadTourism();

    }, []);


    return (
        <div className="content-page">

            <div className="content-heading">

                <span>
                    TRAVEL INDIA
                </span>

                <h1>
                    Explore India
                </h1>

                <p>
                    Discover India's beautiful
                    destinations and attractions.
                </p>

            </div>


            {loading && (
                <div className="content-message">
                    Loading destinations...
                </div>
            )}


            {error && (
                <div className="content-error">
                    {error}
                </div>
            )}


            {!loading && !error && (

                <div className="content-grid">

                    {places.map((place) => (

                        <div
                            className="content-card"
                            key={place.id}
                        >

                            <div className="content-card-image">
                                🗺️
                            </div>

                            <div className="content-card-body">

                                <h2>
                                    {place.name}
                                </h2>

                                <p>
                                    {place.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default Tourism;