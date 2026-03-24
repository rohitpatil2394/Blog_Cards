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
    width: "60%",
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

  const topLine = {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "5px"
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
    color: "#6b7280"
  };

  const iconStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px"
  };

  return (
    <div 
      style={cardStyle} 
      onClick={() => navigate(`/blog/${id}`)}
      onMouseEnter={e => e.currentTarget.style.background = "#ece0e0"}
      onMouseLeave={e => e.currentTarget.style.background = "white"}
    >
      
      {/* LEFT CONTENT */}
      <div style={leftStyle}>

        {/* Author line */}
        <div style={topLine}>
          In <b>{author}</b>
        </div>

        {/* Title */}
        <h2 style={titleStyle}>{title}</h2>

        {/* Description */}
        <p style={paraStyle}>{para}</p>

        {/* Stats */}
        <div style={statsRow}>
          <span>⭐ {date}</span>

          <span style={iconStyle}>
            <AiOutlineLike /> {likes}
          </span>

          <span style={iconStyle}>
            <FaRegCommentDots /> {comments}
          </span>

          <span>
            <FaRegBookmark />
          </span>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div style={rightStyle}>
        <img style={imgStyle} src={image} alt="" />
      </div>

    </div>
  )
}

export default Blogcards