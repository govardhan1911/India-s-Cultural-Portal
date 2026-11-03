import React, { useEffect, useState } from "react";
import "./Hero.css";

import tajmahal from "../assets/images/tajmahal.png";
import hawamahal from "../assets/images/hawamahal.png";
import diwali from "../assets/images/diwali.png";
import raigad from "../assets/images/raigad.png";
import kathakali from "../assets/images/kathakali.png";
import holi from "../assets/images/holi.png";

const Hero = () => {

    const slides = [
        {
            image: tajmahal,
            title: "The Timeless Beauty of the Taj Mahal",
            subtitle:
                "Explore India's magnificent monuments and the stories behind them.",
        },
        {
            image: hawamahal,
            title: "Discover the Grandeur of Hawa Mahal",
            subtitle:
                "Experience the architectural wonders and royal heritage of India.",
        },
        {
            image: diwali,
            title: "Celebrate the Festival of Lights",
            subtitle:
                "Experience the colors, traditions and joy of Diwali across India.",
        },
        {
            image: raigad,
            title: "Walk Through the History of Raigad",
            subtitle:
                "Discover the forts, legends and history that shaped Maharashtra.",
        },
        {
            image: kathakali,
            title: "The Art of Kathakali",
            subtitle:
                "Experience India's vibrant traditional dance, music and storytelling.",
        },
        {
            image: holi,
            title: "Celebrate the Colors of Holi",
            subtitle:
                "Experience India's most colorful festival of joy, friendship and togetherness.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentSlide((prev) =>
                (prev + 1) % slides.length
            );

        }, 5000);

        return () => clearInterval(interval);

    }, [slides.length]);


    const goToSlide = (index) => {
        setCurrentSlide(index);
    };


    return (
        <section className="hero">

            <div className="hero-slides">

                {slides.map((slide, index) => (

                    <div
                        key={index}
                        className={`hero-slide ${
                            index === currentSlide ? "active" : ""
                        }`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                    >

                        <div className="hero-overlay"></div>

                        <div className="hero-content">

                            <span className="hero-small-title">
                                Sanskriti Bharat
                            </span>

                            <h1>
                                {slide.title}
                            </h1>

                            <p>
                                {slide.subtitle}
                            </p>

                            <div className="hero-buttons">

                                <a
                                    href="/heritage"
                                    className="hero-btn primary-btn"
                                >
                                    Explore Heritage
                                </a>

                                <a
                                    href="/india-map"
                                    className="hero-btn secondary-btn"
                                >
                                    India Map
                                    
                                </a>

                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* Slide Indicators */}

            <div className="hero-indicators">

                {slides.map((_, index) => (

                    <button
                        key={index}
                        className={
                            index === currentSlide
                                ? "indicator active"
                                : "indicator"
                        }
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />

                ))}

            </div>


            {/* Scroll indicator */}

            <div className="scroll-indicator">

                <span>Explore India</span>

                <div className="scroll-arrow">
                    ↓
                </div>

            </div>

        </section>
    );
};

export default Hero;