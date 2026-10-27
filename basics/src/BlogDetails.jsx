import { useState } from "react";
import { Link } from "react-router-dom";

export default function BlogDetails() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "tarun",
    },
    {
      id: 2,
      name: "tarun1",
    },
  ]);
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>id ={item.id}</h1>
            <h1>name ={item.name}</h1>
            <Link to={`/blog/${item.id}`}>View</Link>
          </div>
        );
      })}
    </>
  );
}
