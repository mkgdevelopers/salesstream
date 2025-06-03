import React from "react";
import { Link } from "react-router-dom";

const HomepageSections = () => {
  const sections = [
    { name: "Benefits", path: "/admin/homepage/benefits", color: "#0ea5e9" },
    { name: "Nightmares", path: "/admin/homepage/nightmares", color: "#f97316" },
    { name: "Solutions", path: "/admin/homepage/solutions", color: "#10b981" },
    // Add more sections here in future
  ];

  return (
    <div>
      <h2 style={{ marginBottom: "20px", fontWeight: "600", fontSize: "1.5rem" }}>Homepage Sections</h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
        {sections.map((section, i) => (
          <Link
            key={i}
            to={section.path}
            style={{
              backgroundColor: section.color,
              color: "#fff",
              padding: "20px",
              borderRadius: "12px",
              fontWeight: "600",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              transition: "0.2s",
            }}
          >
            Edit {section.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomepageSections;
