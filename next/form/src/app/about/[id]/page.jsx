"use client";

import { ApiContext } from "@/components/Context";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function Page() {
  const { id } = useParams();

  const data = useContext(ApiContext);
  const api = data.api;

  // console.log("Api data", data.api);
  // console.log("first id", id);

  return (
    <>
      {api
        .filter((data) => data.id === Number(id))
        .map((item) => {
          return (
            <div key={item.id} className="p-4">
              <h1 className="text-4xl border-b-2 border-amber-400 mb-8">
                PRODUCT ITEM
              </h1>

              <table >
                <thead >
                  <tr className="text-center">
                    <th className="text-amber-400 w-30">Product Id</th>
                    <th className="text-amber-400 w-30">User Id</th>
                    <th className="text-amber-400 ">Title</th>
                    <th className="text-amber-400 ">Product Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>
                      <h1>{item.id}</h1>
                    </td>
                    <td>
                      <h1>{item.userId}</h1>
                    </td>
                    <td>
                      <h1>{item.title}</h1>
                    </td>
                    <td>
                      <h1>{item.body}</h1>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </>
  );
}
