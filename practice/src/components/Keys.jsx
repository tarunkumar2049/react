import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Keys() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const value = await fetch("https://fakestoreapi.com/products");
      const data1 = await value.json();
      setData(data1);
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <Link to="/About">About</Link>
      <Link to="/contact">Contact</Link>

      <div className="flex flex-col gap-10">
        {data.map((user, id) => (
          <div>
            <h1 key={id}>TITLE: {user.title}</h1>
            {/* <h1>PRICE: {user.price}</h1> */}
          </div>
        ))}
      </div>
    </div>
  );
}
