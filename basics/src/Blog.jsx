import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Blog() {
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
  const { id } = useParams();

  const filterData = data.filter((item) => item.id === Number(id));

  return (
    <>
      <div className="flex flex-col gap-10">
        {filterData.map((item) => {
          return (
            <div key={item.id} className="flex gap-1 flex-col items-start">
              <h1>Id : {item.id}</h1>
              <h1>Title : {item.name}</h1>
              <h1>NewPrice : {item.newPrice}</h1>
              <h1>Description : {item.description}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
