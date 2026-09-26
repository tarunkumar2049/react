export default function Event() {
  function parent() {
    console.log("Parent");
  }
  function child(e) {
    console.log("Child");
    e.stopPropagation(); //to prevent bubbling 
  }
  return (
    <div>
      <div onClick={parent}>
        <button className="bg-amber-400 m-10 px-2" onClick={child}>
          Child
        </button>
      </div>
    </div>
  );
}
