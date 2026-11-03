import React, { useEffect, useState } from "react";

import Hero from "../components/Hero";
import IndiaMap from "../components/IndiaMap";

import FestivalCard from "../components/FestivalCard";
import FoodCard from "../components/FoodCard";
import HeritageCard from "../components/HeritageCard";
import TourismCard from "../components/TourismCard";

import Gallery from "../components/Gallery";
import Loader from "../components/Loader";
import ScrollReveal from "../components/ScrollReveal";


import {
    getStates,
    getFestivals,
    getFoods,
    getHeritage,
    getTourism
} from "../services/api";

import "./Home.css";

const Home = () => {

    const [states, setStates] = useState([]);
    const [festivals, setFestivals] = useState([]);
    const [foods, setFoods] = useState([]);
    const [heritage, setHeritage] = useState([]);
    const [tourism, setTourism] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const loadData = async () => {

            try {

                const [
                    stateData,
                    festivalData,
                    foodData,
                    heritageData,
                    tourismData
                ] = await Promise.all([

                    getStates(),
                    getFestivals(),
                    getFoods(),
                    getHeritage(),
                    getTourism()

                ]);

                setStates(stateData);
                setFestivals(festivalData);
                setFoods(foodData);
                setHeritage(heritageData);
                setTourism(tourismData);

            } catch (err) {

                console.error(err);

                setError(
                    "Unable to connect to the Sanskriti Bharat server."
                );

            } finally {

                setLoading(false);

            }

        };

        loadData();

    }, []);

    return (

        <main>

            <Hero />

            <IndiaMap
                states={states}
                loading={loading}
                error={error}
            />

            {/* FESTIVALS */}

            <section
                id="festivals"
                className="home-section festival-section"
            >

                <div className="section-heading">

                    <span>CELEBRATIONS OF INDIA</span>

                    <h2>
                        Festivals of India
                    </h2>

                    <p>
                        Experience the colors,
                        traditions and celebrations
                        that bring India together.
                    </p>

                </div>

                {loading ? (

                    <Loader />

                ) : (

                    <div className="cards-grid">

                        {festivals.map(
                            (festival, index) => (

                                <FestivalCard
                                    key={festival.id}
                                    festival={festival}
                                    index={index}
                                />

                            )
                        )}

                    </div>

                )}

            </section>

            {/* FOOD */}

            <section
                id="food"
                className="home-section food-section"
            >

                <div className="section-heading">

                    <span>TASTE OF INDIA</span>

                    <h2>
                        Flavours & Cuisine
                    </h2>

                    <p>
                        Discover India's rich culinary
                        traditions, from street food
                        to royal kitchens.
                    </p>

                </div>

                {loading ? (

                    <Loader />

                ) : (

                    <div className="cards-grid">

                        {foods.map(
                            (food, index) => (

                                <FoodCard
                                    key={food.id}
                                    food={food}
                                    index={index}
                                />

                            )
                        )}

                    </div>

                )}

            </section>

            {/* HERITAGE */}

            <section
                id="heritage"
                className="home-section heritage-section"
            >

                <div className="section-heading">

                    <span>OUR LEGACY</span>

                    <h2>
                        Heritage of India
                    </h2>

                    <p>
                        Walk through centuries of
                        architecture, history and
                        cultural heritage.
                    </p>

                </div>

                {loading ? (

                    <Loader />

                ) : (

                    <div className="cards-grid">

                        {heritage.map(
                            (item, index) => (

                                <HeritageCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                />

                            )
                        )}

                    </div>

                )}

            </section>

            {/* TOURISM */}

            <section
                id="tourism"
                className="home-section tourism-section"
            >

                <div className="section-heading">

                    <span>TRAVEL INDIA</span>

                    <h2>
                        Incredible Destinations
                    </h2>

                    <p>
                        From mountains and beaches
                        to forts and ancient cities.
                    </p>

                </div>

                {loading ? (

                    <Loader />

                ) : (

                    <div className="tourism-grid">

                        {tourism.map(
                            (place, index) => (

                                <TourismCard
                                    key={place.id}
                                    place={place}
                                    index={index}
                                />

                            )
                        )}

                    </div>

                )}

            </section>

            <Gallery />

        </main>

    );
};

export default Home;