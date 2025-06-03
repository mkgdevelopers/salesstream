import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaTachometerAlt, FaTools, FaUsers, FaCog } from "react-icons/fa";
import '../index.css'
const AdminLayout = () => {
  return (
    <div className="admin-layout" style={{ display: "flex", height: "100vh", backgroundColor: "#f1f5f9" }}>
      
      {/* Sidebar */}
      <aside style={{
        width: "250px",
        backgroundColor: "#0f172a",
        color: "#fff",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "1.5rem" }}>SaleStream Admin</h2>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "30px" }}>
          <NavLink to="/admin" end className={({ isActive }) => isActive ? "admin-link active" : "admin-link"}>
            <FaTachometerAlt style={{ marginRight: "10px" }} />
            Dashboard
          </NavLink>
          <NavLink to="/admin/homepage" className={({ isActive }) => isActive ? "admin-link active" : "admin-link"}>
            <FaTools style={{ marginRight: "10px" }} />
            Homepage Editor
          </NavLink>
          <NavLink to="/admin/users" className={({ isActive }) => isActive ? "admin-link active" : "admin-link"}>
            <FaUsers style={{ marginRight: "10px" }} />
            Users
          </NavLink>
          <NavLink to="/admin/settings" className={({ isActive }) => isActive ? "admin-link active" : "admin-link"}>
            <FaCog style={{ marginRight: "10px" }} />
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Topbar */}
        <header style={{
          backgroundColor: "#fff",
          padding: "20px 30px",
          borderBottom: "1px solid #e2e8f0",
          fontWeight: "600",
          fontSize: "1.1rem",
        }}>
          Admin Panel
        </header>

        {/* Page content */}
        <main style={{ padding: "30px", overflowY: "auto", flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
