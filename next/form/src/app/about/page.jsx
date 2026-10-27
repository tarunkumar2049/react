"use client";

import { ApiContext } from "@/components/Context";
import Link from "next/link";
import { useContext } from "react";

export default function Page() {
  const data = useContext(ApiContext);
  console.log("Api data", data.api);
  const api = data.api;
  return (
    <>
      <h1 className="text-center text-2xl">About Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {api?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col  gap-1 rounded-2xl m-8 bg-amber-100 mb-10 p-4"
            >
              <h1>ID: {item.id}</h1>
              <h1>Title : {item.title}</h1>
              <Link
                className="text-blue-600 font-semibold"
                href={`/about/${item.id}`}
              >
                Click here
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
