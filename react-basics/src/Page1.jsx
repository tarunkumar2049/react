import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <div className="flex text-2xl justify-around">
      <h1>REACT</h1>
      <span className="list flex gap-10">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </span>
    </div>
  );
}
