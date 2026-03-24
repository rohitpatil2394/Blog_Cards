import React, { useState } from 'react'
import Blogcards from './Blogcards'
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.webp'
import img5 from '../../assets/img5.webp'
function Cardhomepage() {

  const [data] = useState([
  {
    id: 1,
    title: "Why Reading More Books Wasn’t Making Me Smarter",
    para: "I Realized I Had Been Reading Wrong My Entire Life",
    image: img1,
    author: "Shruti Mangawa",
    date: "Dec 11, 2025",
    likes: "9.5K",
    comments: "355"
  },
  {
    id: 2,
    title: "You Have No Idea How Far Behind Tesla Is",
    para: "The leapfrog moment has just happened.",
    image: img2,
    author: "Elon Insights",
    date: "Dec 10, 2025",
    likes: "8.2K",
    comments: "210"
  },
  {
    id: 3,
    title: "The 5-Minute Mental Reset That Actually Works",
    para: "An evidence-based routine you can try right now.",
    image: img3,
    author: "Mind Lab",
    date: "Dec 9, 2025",
    likes: "6.1K",
    comments: "120"
  },
  {
    id: 4,
    title: "AI Agents: Complete Course",
    para: "From beginner to intermediate to production.",
    image: img4,
    author: "Tech World",
    date: "Dec 8, 2025",
    likes: "7.5K",
    comments: "98"
  },
  {
    id: 5,
    title: "Why nobody can read anymore",
    para: "When curiosity fades, attention follows.",
    image: img5,
    author: "Deep Thinker",
    date: "Dec 7, 2025",
    likes: "5.3K",
    comments: "76"
  }
]);

  return (
    <div>
     {
  data.map((item) => (
    <Blogcards 
      key={item.id}
      id={item.id}
      title={item.title}
      para={item.para}
      image={item.image}
      author={item.author}
      date={item.date}
      likes={item.likes}
      comments={item.comments}
    />
  ))
}
    </div>
  )
}

export default Cardhomepage