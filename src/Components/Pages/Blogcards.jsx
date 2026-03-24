import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegCommentDots, FaRegBookmark } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

function Blogcards({ id, title, para, image, author, date, likes, comments }) {

  const navigate = useNavigate();

  const cardStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    borderBottom: "1px solid #e5e7eb",
    cursor: "pointer",
    transition: "0.3s"
  };

  const leftStyle = {
    flex: 2,
    display: "flex",
    flexDirection: "column"
  };

  const rightStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  };

  const imgStyle = {
    width: "160px",
    height: "110px",
    objectFit: "cover",
    borderRadius: "6px"
  };

  const titleStyle = {
    margin: "5px 0",
    fontSize: "20px",
    fontWeight: "bold"
  };

  const paraStyle = {
    color: "#555",
    fontSize: "14px"
  };

  const statsRow = {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
    alignItems: "center",
    fontSize: "14px",
    color: "#6b7280",
    flexWrap: "wrap"
  };

  return (
    <div 
      style={cardStyle} 
      className="card"
      onClick={() => navigate(`/blog/${id}`)}
      onMouseEnter={e => e.currentTarget.style.background = "#ece0e0"}
      onMouseLeave={e => e.currentTarget.style.background = "white"}
    >

      {/* 🔥 ONLY SMALL FIX (not breaking UI) */}
      <style>{`
        @media (max-width: 768px) {
          .card {
            width: 95% !important;
            padding: 15px !important;
          }

          .card img {
            width: 120px !important;
            height: 90px !important;
          }

          .title {
            font-size: 16px !important;
          }

          .para {
            font-size: 13px !important;
          }
        }
      `}</style>

      {/* LEFT */}
      <div style={leftStyle}>

        <div style={{ fontSize: "13px", color: "#6b7280" }}>
          In <b>{author}</b>
        </div>

        <h2 style={titleStyle} className="title">{title}</h2>

        <p style={paraStyle} className="para">{para}</p>

        <div style={statsRow}>
          <span>⭐ {date}</span>

          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <AiOutlineLike /> {likes}
          </span>

          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FaRegCommentDots /> {comments}
          </span>

          <FaRegBookmark />
        </div>

      </div>

      {/* RIGHT IMAGE (UNCHANGED STRUCTURE) */}
      <div style={rightStyle}>
        <img src={image} alt="" style={imgStyle} />
      </div>

    </div>
  )
}

export default Blogcards