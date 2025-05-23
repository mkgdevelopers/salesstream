import React from 'react';
import { CheckCircle } from 'lucide-react';

function WhyChooseUs() {
    const points = [
        "Transparent Affiliate Tracking",
        "Real-Time Analytics Dashboard",
        "Easy Payout Integrations",
        "Multi-Tier Affiliate System",
        "Custom Commission Models",
        "24/7 Support for Your Partners",
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {points.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3 ">
                            <CheckCircle className="text-green-500 mt-1" />
                            <p className="text-gray-700 text-lg">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
