import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import axios from 'axios';

function CounterArea({ style }) {
    const [nightmares, setNightmares] = useState([]);

    useEffect(() => {
        const fetchNightmares = async () => {
            try {
                const res = await axios.get('https://salesstream-backend.vercel.app/api/nightmares');
                setNightmares(res.data);
            } catch (err) {
                console.error('Failed to fetch nightmares:', err);
            }
        };
        fetchNightmares();
    }, []);

    return (
        <section className="nightmares-section pt-90 pb-120 position-relative" id="counter" style={style}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10">
                        <div className="section-header mb-5">
                            <h2 className="section-title">Common Affiliate Management Nightmares</h2>
                            <p className="section-subtitle">
                                Let's be honest — managing affiliates manually is a mess. If this sounds familiar, it's time for a better way:
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="row g-4">
                    {nightmares.map((item, index) => {
                        const IconComponent = FaIcons[item.iconName] || FaIcons.FaGhost;
                        return (
                            <div className="col-md-6 col-lg-4 mb-10" key={index}>
                                <div 
                                    className="nightmare-card" 
                                    style={{ '--accent-color': item.color }}
                                >
                                    <div className="card-number">0{index + 1}</div>
                                    <div className="card-icon">
                                        <IconComponent size={24} />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <div className="hover-effect"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                <div className="row mt-50">
                    <div className="col-12 text-center">
                        <div className="cta-box">
                            <h4>Ready to solve these problems?</h4>
                            <button className="cta-button">See How SaleStream Helps →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CounterArea;
