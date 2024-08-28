import React from "react";
import { useAuth } from "../auth/AuthProvider";
import "../css/PortalLayout.css";
import { Link } from 'react-router-dom';
import { API_URL } from "../auth/constants";

export default function PortalLayout({ children }) {
  const auth = useAuth();

  async function handleSignOut(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/signout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getRefreshToken()}`,
        },
      });
      if (response.ok) {
        auth.signOut(); // Assuming `signOut` is a function
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/AppointmentScheduling">
              Agendar cita Médica
            </Link>
          </li>
          <li>
            <Link to="/Navbar">Historial de citas</Link>
          </li>
          <li>
            <Link to="/Login">Inicia sesión</Link>
          </li>
          <li>
            <Link to="/me">{auth.getUser()?.username || ""}</Link>
          </li>
          <li>
            <a href="#" onClick={handleSignOut}>
              Sign out
            </a>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
