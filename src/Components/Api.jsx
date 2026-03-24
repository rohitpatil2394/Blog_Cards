import React, { useEffect, useState } from 'react'

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div>
      {
        data.slice(0, 10).map((item) => (
          <div key={item.id}>
            <h1>{item.id} - {item.name}</h1>
            <p> UserName-{item.username}</p>
            {/* <img src={item.url} alt="xyz" /> */}
          </div>
        ))
      }
    </div>
  )
}

export default Api;