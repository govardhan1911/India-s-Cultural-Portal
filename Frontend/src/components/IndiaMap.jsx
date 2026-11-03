import React, { useState } from "react";

import SearchBar from "./SearchBar";
import StateCard from "./StateCard";
import ScrollReveal from "./ScrollReveal";
import { useEffect } from "react";

import "./IndiaMap.css";

const IndiaMap = ({
    states = [],
    loading = false,
    error = ""
}) => {

    const [filteredStates, setFilteredStates] =
        useState(states);

    const [selectedState, setSelectedState] =
        useState(null);

    useEffect(() => {

        setFilteredStates(states);

    }, [states]);

    const handleSearch = (text) => {

        const result = states.filter((state) =>
            state.name
                ?.toLowerCase()
                .includes(text.toLowerCase())
        );

        setFilteredStates(result);
    };

    return (

        <section id="states" className="india-map-section">

            <div className="section-heading">

                <span>EXPLORE INDIA</span>

                <h2>
                    36 States & Union Territories
                </h2>

                <p>
                    Discover the unique identity,
                    traditions and stories of every
                    corner of India.
                </p>

            </div>

            <div className="india-map-layout">

                <ScrollReveal className="map-visual">

                    <div className="map-glow"></div>

                    <div className="india-symbol">

                        <div className="india-shape">

                            <span className="map-point point-1">
                                ✦
                            </span>

                            <span className="map-point point-2">
                                ✦
                            </span>

                            <span className="map-point point-3">
                                ✦
                            </span>

                            <span className="map-point point-4">
                                ✦
                            </span>

                            <span className="map-point point-5">
                                ✦
                            </span>

                        </div>

                        <div className="map-label">
                            INDIA
                        </div>

                    </div>

                    <div className="map-orbit orbit-one"></div>
                    <div className="map-orbit orbit-two"></div>

                </ScrollReveal>

                <div className="states-content">

                    <SearchBar
                        placeholder="Search state or union territory..."
                        onSearch={handleSearch}
                    />

                    {loading && (
                        <p className="section-message">
                            Loading states...
                        </p>
                    )}

                    {error && (
                        <p className="section-error">
                            {error}
                        </p>
                    )}

                    {!loading && !error && (

                        <div className="states-grid">

                            {filteredStates.map(
                                (state, index) => (

                                    <ScrollReveal
                                        key={state.id}
                                        delay={
                                            (index % 8) * 70
                                        }
                                    >

                                        <StateCard
                                            state={state}
                                            onClick={
                                                setSelectedState
                                            }
                                        />

                                    </ScrollReveal>

                                )
                            )}

                        </div>

                    )}

                    {!loading &&
                        !error &&
                        filteredStates.length === 0 && (

                            <div className="empty-state">
                                No state found.
                            </div>

                        )}

                </div>

            </div>

            {selectedState && (

                <div
                    className="state-modal"
                    onClick={() =>
                        setSelectedState(null)
                    }
                >

                    <div
                        className="state-modal-content"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        <button
                            className="modal-close"
                            onClick={() =>
                                setSelectedState(null)
                            }
                        >
                            ×
                        </button>

                        <span>
                            EXPLORE
                        </span>

                        <h2>
                            {selectedState.name}
                        </h2>

                        {selectedState.capital && (
                            <p>
                                Capital:
                                {" "}
                                {selectedState.capital}
                            </p>
                        )}

                    </div>

                </div>

            )}

        </section>

    );
};

export default IndiaMap;