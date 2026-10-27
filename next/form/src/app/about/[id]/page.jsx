"use client";

import { ApiContext } from "@/components/Context";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function Page() {
  const { id } = useParams();

  const data = useContext(ApiContext);
  console.log("Api data", data.api);
  const api = data.api;

  // console.log("first id", id);

  return (
    <>
      {api
        .filter((data) => data.id === Number(id))
        .map((item) => {
          return (
            <div key={item.id} className="p-4 flex flex-col gap-2">
              <h1 className="text-4xl border-b-2 border-amber-400 mb-8">
                PRODUCT ITEM
              </h1>
              <div className="flex">
                <img src="/laptop.png" alt="laptop img" className="w-100" />
                <div className="mt-10 ml-20 flex flex-col gap-4 ">
                  <h1 className="text-2xl font-semibold ">
                    TITLE : {item.title}
                  </h1>
                  <h1 className="rounded-2xl">
                    ID : {item.id}
                  </h1>
                  <h1>USER-ID : {item.userId}</h1>
                  <h1 className="w-220 text-xl">
                    <span className="font-semibold ">Description</span> :{" "}
                    {item.body}
                  </h1>
                  <button className="bg-amber-400 rounded-2xl w-24" >Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
