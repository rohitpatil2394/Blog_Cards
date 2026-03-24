import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBookmark, FaUser, FaFileAlt, FaChartBar } from "react-icons/fa";

const Navbar = () => {
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
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          cursor: pointer;
        }

        .menu li:hover {
          font-weight: bold;
        }

        .bottom {
          margin-top: auto;
          font-size: 12px;
          color: gray;
        }

        a {
          text-decoration: none;
          color: black;
        }
      `}</style>

      <div className="sidebar">
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