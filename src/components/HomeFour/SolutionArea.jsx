import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SolutionArea({ style }) {
    const [solutions, setSolutionss] = useState([]);

    useEffect(() => {
        const fetchSolutions = async () => {
            try {
                const res = await axios.get('https://salesstream-backend.vercel.app/api/solutions');
                setSolutionss(res.data);
            } catch (err) {
                console.error('Failed to fetch benefits:', err);
            }
        };
        fetchSolutions();
    }, []);

  return (
    <section className="appie-solution-area pt-100 pb-130 position-relative" style={{ backgroundColor: '#f8fafc', ...style }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="appie-section-title mb-70">
              <h3 className="appie-title" style={{ color: '#0f172a' }}>
                SaleStream Solves It All — Effortlessly
              </h3>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {solutions.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={item._id}>
              <div className="solution-card bg-white p-5 rounded-3 h-100 transition-all hover-transform" 
                   style={{
                     boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                     borderTop: '4px solid #10b981'
                   }}>
                <div className="solution-icon mb-4" style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: '#10b981'
                }}>
                  {item.icon}
                </div>
                <h5 className="fw-bold mb-3" style={{ color: '#0f172a' }}>{item.title}</h5>
                <p className="mb-0" style={{ color: '#64748b' }}>{item.desc}</p>
                <div className="solution-number" style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  fontSize: '64px',
                  fontWeight: '800',
                  color: 'rgba(16, 185, 129, 0.03)',
                  lineHeight: '1'
                }}>
                  {index < 9 ? `0${index + 1}` : index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionArea;
