import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBookmark, FaUser, FaFileAlt, FaChartBar, FaBars } from "react-icons/fa";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .sidebar {
          width: 220px;
          height: 100vh;
          background: #d8d4d4;
          border-right: 1px solid #ddd;
          padding: 20px;
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          font-family: Arial;
          transition: 0.3s;
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .menu {
          list-style: none;
          padding: 0;
        }

        .menu li {
          padding: 10px 0;
        }

        .menu li a {
          display: flex;
          align-items: center;
          gap: 10px;
          color: black;
        }

        .menu li:hover {
          font-weight: bold;
        }

        .bottom {
          margin-top: auto;
          font-size: 12px;
          color: gray;
        }

        .toggleBtn {
          display: none;
          position: fixed;
          top: 15px;
          left: 15px;
          font-size: 22px;
          cursor: pointer;
          z-index: 1000;
        }

        /* 🔥 Mobile Fix */
        @media (max-width: 768px) {
          .sidebar {
            left: -240px;
          }

          .sidebar.active {
            left: 0;
          }

          .toggleBtn {
            display: block;
          }
        }

        a {
          text-decoration: none;
        }
      `}</style>

      {/* 🔥 Hamburger Icon */}
      <div className="toggleBtn" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <div className="logo">Blog-Cards</div>

        <ul className="menu">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/library"><FaBookmark /> Library</Link></li>
          <li><Link to="/profile"><FaUser /> Profile</Link></li>
          <li><Link to="/stories"><FaFileAlt /> Stories</Link></li>
          <li><Link to="/stats"><FaChartBar /> Stats</Link></li>
        </ul>

        <div className="bottom">
          <p>Find writers and publications to follow.</p>
          <a href="#">See suggestions</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;