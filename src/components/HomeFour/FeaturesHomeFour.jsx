import React, { useEffect, useState } from 'react';
import axios from 'axios';

import shape13 from '../../assets/images/shape/shape-13.png';
import shape14 from '../../assets/images/shape/shape-14.png';
import shape15 from '../../assets/images/shape/shape-15.png';

function FeaturesHomeFour() {
    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        const fetchBenefits = async () => {
            try {
                const res = await axios.get('https://salesstream-backend.vercel.app/api/benefits');
                setBenefits(res.data);
            } catch (err) {
                console.error('Failed to fetch benefits:', err);
            }
        };
        fetchBenefits();
    }, []);

    return (
        <section className="appie-features-area-2 appie-features-area-5 pt-90 pb-100" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">Benefits</h3>
                        </div>
                    </div>
                </div>
                <div className="row mt-30 justify-content-center">
                    <div>
                        <div className="appie-features-boxes">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className={`appie-features-box-item ${
                                        index % 3 === 1 ? 'item-2' : index % 3 === 2 ? 'item-3' : ''
                                    } appie-features-box-5-item`}
                                >
                                    <h4 className="title">{benefit.title}</h4>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-shape-1"><img src={shape13} alt="" /></div>
            <div className="features-shape-2"><img src={shape14} alt="" /></div>
            <div className="features-shape-3"><img src={shape15} alt="" /></div>
        </section>
    );
}

export default FeaturesHomeFour;
