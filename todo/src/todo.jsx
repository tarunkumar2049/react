import { useEffect } from "react";
import { useState } from "react";

export default function Todo() {
  const [data, setData] = useState(() => {
    const fetch = localStorage.getItem("datas");
    return fetch ? JSON.parse(fetch) : [];
  });

  const [inpt, setInpt] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (inpt != "") {
      setData([...data, inpt]);
    } else {
      const inv = "Invalid Value";
      return null;
    }
    setInpt("");
  }

  function removeData(id) {
    const filteredData = data.filter((_, index) => index !== id);
    setData(filteredData);
  }

  function removeAll() {
    setData([]);
  }

  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <div className="bg-gray-300 h-screen flex justify-center items-center">
        <div className="w-auto">
          <input
            id="input"
            value={inpt}
            onChange={(e) => setInpt(e.target.value)}
            className="px-8 rounded-xl border py-2 w-full -mr-20 placeholder-gray-600 focus:outline-none"
            type="text"
            placeholder="Add a Task"
          />
          <button
            className="bg-green-500 border-2 border-green-500 rounded-xl px-2 py-1 ml-6"
            onClick={addTask}
          >
            ADD
          </button>
          <div className="flex justify-center mt-6">
            <button
              className="bg-yellow-500 border-2 border-yellow-500 rounded-xl px-8 py-1"
              onClick={removeAll}
            >
              Reset All Tasks
            </button>
          </div>

          <div>
            List :{" "}
            {data.length === 0 ? (
              <div>
                if (inv){{ inv }}else{<span>not data found</span>}
              </div>
            ) : (
              <div>
                {data.map((item, index) => {
                  return (
                    <div className="flex gap-9" key={index}>
                      <span className="p-2 my-3">{item}</span>
                      <button
                        className="bg-red-700 border-2 border-red-700 rounded-xl px-2 my-3"
                        onClick={() => removeData(index)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
