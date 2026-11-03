import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { getStateById } from "../services/api";

import "./StateDetails.css";


const StateDetails = () => {

    const { id } = useParams();


    const [state, setState] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");


    useEffect(() => {

        const loadState = async () => {

            try {

                const data =
                    await getStateById(id);

                setState(data);

            } catch (err) {

                console.error(err);

                setError(
                    "Unable to load state details."
                );

            } finally {

                setLoading(false);

            }
        };


        loadState();

    }, [id]);


    if (loading) {

        return (
            <div className="state-page-message">
                Loading...
            </div>
        );

    }


    if (error) {

        return (
            <div className="state-page-message error">
                {error}
            </div>
        );

    }


    if (!state) {
        return null;
    }


    return (

        <div className="state-details-page">


            {/* =========================
                HERO
            ========================= */}

            <div className="state-details-hero">

                {state.imageUrl && (

                    <img
                        src={state.imageUrl}
                        alt={state.name}
                    />

                )}


                <div className="hero-overlay">

                    <span>
                        EXPLORE {state.type}
                    </span>

                    <h1>
                        {state.name}
                    </h1>

                    <p>
                        Capital: {state.capital}
                    </p>

                </div>

            </div>


            {/* =========================
                BASIC INFORMATION
            ========================= */}

            <div className="state-information">

                <div className="info-box">

                    <span>
                        Capital
                    </span>

                    <strong>
                        {state.capital || "N/A"}
                    </strong>

                </div>


                <div className="info-box">

                    <span>
                        Official Language
                    </span>

                    <strong>
                        {state.officialLanguage || "N/A"}
                    </strong>

                </div>


                <div className="info-box">

                    <span>
                        Population
                    </span>

                    <strong>
                        {state.population
                            ? state.population.toLocaleString()
                            : "N/A"}
                    </strong>

                </div>


                <div className="info-box">

                    <span>
                        Area
                    </span>

                    <strong>
                        {state.areaSqKm
                            ? `${state.areaSqKm.toLocaleString()} km²`
                            : "N/A"}
                    </strong>

                </div>

            </div>


            {/* =========================
                DESCRIPTION
            ========================= */}

            <section className="state-description">

                <span>
                    ABOUT
                </span>

                <h2>
                    About {state.name}
                </h2>

                <p>
                    {state.description}
                </p>

            </section>


            {/* =========================
                HISTORY
            ========================= */}

            <section className="state-description">

                <span>
                    HISTORY
                </span>

                <h2>
                    History of {state.name}
                </h2>

                <p>
                    {state.history}
                </p>

            </section>


            {/* =========================
                CULTURE
            ========================= */}

            <section className="state-description">

                <span>
                    CULTURE
                </span>

                <h2>
                    Culture of {state.name}
                </h2>

                <p>
                    {state.culture}
                </p>

            </section>


            {/* =========================
                CULTURE CATEGORIES
            ========================= */}

            <div className="state-categories">


                <Link
                    to={`/festivals?stateId=${state.id}`}
                    className="state-category"
                >

                    <div className="category-icon">
                        🎉
                    </div>

                    <h2>
                        Festivals
                    </h2>

                    <p>
                        Discover traditional
                        festivals.
                    </p>

                </Link>


                <Link
                    to={`/foods?stateId=${state.id}`}
                    className="state-category"
                >

                    <div className="category-icon">
                        🍛
                    </div>

                    <h2>
                        Food
                    </h2>

                    <p>
                        Explore traditional
                        cuisine.
                    </p>

                </Link>


                <Link
                    to={`/heritage?stateId=${state.id}`}
                    className="state-category"
                >

                    <div className="category-icon">
                        🏛️
                    </div>

                    <h2>
                        Heritage
                    </h2>

                    <p>
                        Discover historical
                        heritage.
                    </p>

                </Link>


                <Link
                    to={`/tourism?stateId=${state.id}`}
                    className="state-category"
                >

                    <div className="category-icon">
                        🗺️
                    </div>

                    <h2>
                        Tourism
                    </h2>

                    <p>
                        Explore beautiful
                        destinations.
                    </p>

                </Link>

            </div>

        </div>
    );
};


export default StateDetails;