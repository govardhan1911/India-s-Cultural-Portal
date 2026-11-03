import React, { useEffect, useState } from "react";

import { getFestivals } from "../services/api";

import "./ContentPage.css";

const Festivals = () => {

    const [festivals, setFestivals] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        const loadFestivals = async () => {

            try {

                const data = await getFestivals();

                setFestivals(data);

            } catch (err) {

                console.error(err);

                setError(
                    "Unable to load festivals."
                );

            } finally {

                setLoading(false);

            }

        };

        loadFestivals();

    }, []);


    return (
        <div className="content-page">

            <div className="content-heading">

                <span>
                    INDIAN CULTURE
                </span>

                <h1>
                    Festivals of India
                </h1>

                <p>
                    Discover India's colourful
                    festivals and traditions.
                </p>

            </div>


            {loading && (
                <div className="content-message">
                    Loading festivals...
                </div>
            )}


            {error && (
                <div className="content-error">
                    {error}
                </div>
            )}


            {!loading && !error && (

                <div className="content-grid">

                    {festivals.map((festival) => (

                        <div
                            className="content-card"
                            key={festival.id}
                        >

                            <div className="content-card-image">
                                🎉
                            </div>

                            <div className="content-card-body">

                                <h2>
                                    {festival.name}
                                </h2>

                                <p>
                                    {festival.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default Festivals;