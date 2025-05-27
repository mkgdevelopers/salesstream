import React, { useEffect, useState } from "react";
import { client } from "../../../sanityClient";

function TestimonialHomeEight() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      const response = await client.fetch(`*[_type == "feature"] | order(_createdAt asc)`);
      setFeatures(response);
    };
    fetchFeatures();
  }, []);

  return (
    <section className="premium-feature-section" id="features">
      <div className="container">
        <div className="feature-header">
          <h2>
            Built for Performance. <span>Designed for Growth.</span>
          </h2>
          <p>
            Our system simplifies affiliate management so you can scale smarter. Spend less time fixing,
            more time growing.
          </p>
        </div>

        <div className="feature-list">
          {features.map((item, i) => (
            <div key={item._id} className="feature-item">
              <h3>{item.title}</h3>
              <p><strong>Problem:</strong> {item.problem}</p>
              <p><strong>Solution:</strong> {item.solution}</p>
              {item.note && <p>{item.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialHomeEight;
