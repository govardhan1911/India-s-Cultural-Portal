import React, { useEffect, useRef, useState } from "react";

import "./ScrollReveal.css";

const ScrollReveal = ({
    children,
    className = "",
    delay = 0
}) => {

    const ref = useRef(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    setVisible(true);

                    observer.disconnect();
                }

            },
            {
                threshold: 0.12
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();

    }, []);

    return (

        <div
            ref={ref}
            className={`reveal ${
                visible ? "reveal-visible" : ""
            } ${className}`}
            style={{
                "--reveal-delay": `${delay}ms`
            }}
        >
            {children}
        </div>

    );
};

export default ScrollReveal;