import React, { useState } from "react";

import tajmahal from "../assets/images/tajmahal.png";
import hawamahal from "../assets/images/hawamahal.png";
import diwali from "../assets/images/diwali.png";
import raigad from "../assets/images/raigad.png";
import kathakali from "../assets/images/kathakali.png";
import holi from "../assets/images/holi.png";

import ScrollReveal from "./ScrollReveal";

import "./Gallery.css";

const Gallery = () => {

    const [selectedImage, setSelectedImage] =
        useState(null);

    const images = [
        {
            image: tajmahal,
            title: "Taj Mahal",
            category: "Heritage"
        },
        {
            image: hawamahal,
            title: "Hawa Mahal",
            category: "Architecture"
        },
        {
            image: diwali,
            title: "Diwali",
            category: "Festival"
        },
        {
            image: raigad,
            title: "Raigad Fort",
            category: "History"
        },
        {
            image: kathakali,
            title: "Kathakali",
            category: "Culture"
        },
        {
            image: holi,
            title: "Holi",
            category: "Festival"
        }
    ];

    return (

        <section
            id="gallery"
            className="gallery-section"
        >

            <div className="section-heading">

                <span>VISUAL JOURNEY</span>

                <h2>
                    Glimpses of India
                </h2>

                <p>
                    A visual journey through
                    India's culture, heritage
                    and traditions.
                </p>

            </div>

            <div className="gallery-grid">

                {images.map((item, index) => (

                    <ScrollReveal
                        key={item.title}
                        delay={index * 80}
                    >

                        <div
                            className={`gallery-item gallery-${index + 1}`}
                            onClick={() =>
                                setSelectedImage(item)
                            }
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="gallery-overlay">

                                <span>
                                    {item.category}
                                </span>

                                <h3>
                                    {item.title}
                                </h3>

                                <div>
                                    View +
                                </div>

                            </div>

                        </div>

                    </ScrollReveal>

                ))}

            </div>

            {selectedImage && (

                <div
                    className="gallery-modal"
                    onClick={() =>
                        setSelectedImage(null)
                    }
                >

                    <div
                        className="gallery-modal-content"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >

                        <button
                            onClick={() =>
                                setSelectedImage(null)
                            }
                        >
                            ×
                        </button>

                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                        />

                        <h3>
                            {selectedImage.title}
                        </h3>

                        <span>
                            {selectedImage.category}
                        </span>

                    </div>

                </div>

            )}

        </section>

    );
};

export default Gallery;