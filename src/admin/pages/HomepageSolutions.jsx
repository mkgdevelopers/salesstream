import React, { useEffect, useState } from "react";
import axios from "axios";

const HomepageSolutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [form, setForm] = useState({ title: "", desc: "", icon: "" });
  const [editId, setEditId] = useState(null);
  const API = "http://localhost:5000/api/solutions"; // change if hosted

  // Fetch on mount
  useEffect(() => {
    fetchSolutions();
  }, []);

  const fetchSolutions = async () => {
    try {
      const res = await axios.get(API);
      setSolutions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, form);
      } else {
        await axios.post(API, form);
      }
      setForm({ title: "", desc: "", icon: "" });
      setEditId(null);
      fetchSolutions();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, desc: item.desc, icon: item.icon });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchSolutions();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="mb-4">Manage Solutions</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="desc"
          placeholder="Description"
          value={form.desc}
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: "100px" }}
        />
        <input
          type="text"
          name="icon"
          placeholder="Icon (emoji)"
          value={form.icon}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={btnStyle}>
          {editId ? "Update Solution" : "Add Solution"}
        </button>
      </form>

      {/* List */}
      <div style={{ display: "grid", gap: "20px" }}>
        {solutions.map((sol) => (
          <div key={sol._id} style={cardStyle}>
            <div style={{ fontSize: "24px" }}>{sol.icon}</div>
            <div>
              <h4 style={{ margin: "5px 0" }}>{sol.title}</h4>
              <p style={{ color: "#64748b" }}>{sol.desc}</p>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <button onClick={() => handleEdit(sol)} style={smallBtn}>
                Edit
              </button>
              <button onClick={() => handleDelete(sol._id)} style={{ ...smallBtn, backgroundColor: "#ef4444" }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const btnStyle = {
  padding: "10px 20px",
  backgroundColor: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const cardStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "15px",
  padding: "15px",
  background: "#f9fafb",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const smallBtn = {
  marginLeft: "10px",
  padding: "6px 12px",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default HomepageSolutions;
