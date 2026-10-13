export default function Blog({ params }) {
  console.log("params", params);
  return (
    <>
      <div className="flex flex-col gap-10">
        {memory
          .filter((item) => item.id >= 10)
          .map((item) => {
            return (
              <div key={item.id} className="flex gap-1 flex-col items-start">
                <h1>Id : {item.id}</h1>
                <h1>Title : {item.title}</h1>
                <h1>NewPrice : {item.newPrice}</h1>
                <h1>Description : {item.description}</h1>
              </div>
            );
          })}
      </div>
    </>
  );
}
