import React, { useEffect, useState } from "react";

import { getHeritage } from "../services/api";

import "./ContentPage.css";

const Heritage = () => {

    const [heritage, setHeritage] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        const loadHeritage = async () => {

            try {

                const data = await getHeritage();

                setHeritage(data);

            } catch (err) {

                console.error(err);

                setError(
                    "Unable to load heritage data."
                );

            } finally {

                setLoading(false);

            }

        };

        loadHeritage();

    }, []);


    return (
        <div className="content-page">

            <div className="content-heading">

                <span>
                    HISTORY & CULTURE
                </span>

                <h1>
                    Heritage of India
                </h1>

                <p>
                    Discover India's magnificent
                    historical and cultural heritage.
                </p>

            </div>


            {loading && (
                <div className="content-message">
                    Loading heritage...
                </div>
            )}


            {error && (
                <div className="content-error">
                    {error}
                </div>
            )}


            {!loading && !error && (

                <div className="content-grid">

                    {heritage.map((item) => (

                        <div
                            className="content-card"
                            key={item.id}
                        >

                            <div className="content-card-image">
                                🏛️
                            </div>

                            <div className="content-card-body">

                                <h2>
                                    {item.name}
                                </h2>

                                <p>
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default Heritage;