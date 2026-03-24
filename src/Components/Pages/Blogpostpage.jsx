import React from 'react'
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import img5 from '../../assets/img5.webp'
import { useParams } from 'react-router-dom'

function Blogpostpage() {

    const blogdata = [
        {
            id: 1,
            title: "Why Reading More Books Wasn’t Making Me Smarter",
            image: img1,
            para: "Your mornings offer a unique opportunity to maximize brain function for the rest of the day...Your mornings offer a unique opportunity to maximize brain function for the rest of the day...",
            author: "Rohit Patil",
            date: "Mar 20, 2026",
            readTime: "5 min read",
            tags: ["Self Improvement", "Productivity"]
        },
        {
            id: 2,
            title: "You Have No Idea How Far Behind Tesla Is",
            image: img2,
            para: "I’m not talking about a single tear. I’m talking about a full-blown breakdown...",
            author: "John Doe",
            date: "Mar 18, 2026",
            readTime: "4 min read",
            tags: ["Technology", "Business"]
        },
        {
            id: 3,
            title: "Morning Routine That Works",
            image: img3,
            para: "An evidence-based routine you can try right now...",
            author: "Aman Singh",
            date: "Mar 15, 2026",
            readTime: "6 min read",
            tags: ["Health", "Habits"]
        },
        {
            id: 4,
            title: "Learn Coding Faster",
            image: img4,
            para: "From beginner to intermediate to production...",
            author: "Priya Sharma",
            date: "Mar 10, 2026",
            readTime: "7 min read",
            tags: ["Programming", "Learning"]
        },
        {
            id: 5,
            title: "Why Curiosity Matters",
            image: img5,
            para: "When curiosity fades, attention follows...",
            author: "Neha Joshi",
            date: "Mar 5, 2026",
            readTime: "3 min read",
            tags: ["Mindset", "Focus"]
        },
    ]

    const { id } = useParams()
    const blogpost = blogdata.find(blog => blog.id === parseInt(id))

    if (!blogpost) {
        return <h2 style={{ textAlign: "center" }}>Page Not Found</h2>
    }

    const styles = {
        container: {
            width: "90%",
            maxWidth: "800px",
            margin: "40px auto",
            padding: "20px",
            fontFamily: "Arial"
        },
        image: {
            width: "100%",
            height: "auto",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "20px"
        },
        title: {
            fontSize: "36px",
            marginBottom: "10px",
            lineHeight: "1.3"
        },
        authorRow: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            color: "#555"
        },
        author: {
            fontWeight: "bold"
        },
        para: {
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#444",
            marginBottom: "30px"
        },
        tags: {
            display: "flex",
            gap: "10px",
            flexWrap: "wrap"
        },
        tag: {
            background: "#eee",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px"
        },
        actions: {
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            borderTop: "1px solid #ddd",
            paddingTop: "15px",
            flexWrap: "wrap"
        },
        btn: {
            cursor: "pointer",
            color: "#555"
        }
    }

    return (
        <div style={styles.container}>

            {/* 🔥 Responsive CSS */}
            <style>{`
                @media (max-width: 768px) {
                    .authorRow {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 5px;
                    }

                    .title {
                        font-size: 24px !important;
                    }

                    .para {
                        font-size: 16px !important;
                    }
                }
            `}</style>

            <img 
                src={blogpost.image} 
                alt="" 
                style={styles.image} 
            />

            <h1 style={styles.title} className="title">
                {blogpost.title}
            </h1>

            {/* Author + Date */}
            <div style={styles.authorRow} className="authorRow">
                <div>
                    <span style={styles.author}>{blogpost.author}</span> · {blogpost.date}
                </div>
                <div>{blogpost.readTime}</div>
            </div>

            <p style={styles.para} className="para">
                {blogpost.para}
            </p>

            {/* Tags */}
            <div style={styles.tags}>
                {blogpost.tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>{tag}</span>
                ))}
            </div>

            {/* Actions */}
            <div style={styles.actions}>
                <span style={styles.btn}>👍 Like</span>
                <span style={styles.btn}>💬 Comment</span>
                <span style={styles.btn}>🔖 Save</span>
                <span style={styles.btn}>🔗 Share</span>
            </div>

        </div>
    )
}

export default Blogpostpage