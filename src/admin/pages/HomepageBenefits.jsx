import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://salesstream-backend.vercel.app/api/benefits";

const HomepageBenefits = () => {
  const [benefits, setBenefits] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchBenefits();
  }, []);

  const fetchBenefits = async () => {
    try {
      const res = await axios.get(API);
      setBenefits(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
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
      setForm({ title: "", description: ""});
      setEditId(null);
      fetchBenefits();
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  const handleEdit = (benefit) => {
    setForm({ title: benefit.title, description: benefit.description });
    setEditId(benefit._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchBenefits();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "30px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Manage Benefits</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
          style={inputStyle}
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          required
          style={{ ...inputStyle, height: "80px" }}
        />
        <button type="submit" style={btnStyle}>
          {editId ? "Update Benefit" : "Add Benefit"}
        </button>
      </form>

      <div style={{ display: "grid", gap: "20px" }}>
        {benefits.map((benefit) => (
          <div key={benefit._id} style={cardStyle}>
            <div>
              <h4 style={{ margin: "5px 0" }}>{benefit.title}</h4>
              <p style={{ color: "#64748b" }}>{benefit.description}</p>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <button onClick={() => handleEdit(benefit)} style={smallBtn}>
                Edit
              </button>
              <button
                onClick={() => handleDelete(benefit._id)}
                style={{ ...smallBtn, backgroundColor: "#ef4444" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const formStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  marginBottom: "40px",
  display: "flex",
  flexDirection: "column",
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
  backgroundColor: "#3b82f6",
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
  backgroundColor: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default HomepageBenefits;
