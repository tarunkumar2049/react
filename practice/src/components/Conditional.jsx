import { useState } from "react";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import LoginForm from "./LoginForm";

export default function Conditional() {
  const [isLoggedin, setIsloggedin] = useState(true);
  const [admin, setAdmin] = useState(false);
  function handleClick() {
    setIsloggedin(true);
    setAdmin(true);
  }

  console.log(isLoggedin);

  function greeting() {
    if (isLoggedin) {
      console.log("Welcome Back, logged in");
    } else {
      console.log("New?, Login");
    }
  }

  let data;
  if (isLoggedin && admin) {
    console.log("both");
    data = <Admin />;
  } else if (isLoggedin) {
    console.log("loggedIn");
    data = <Dashboard />;
  } else {
    console.log("loginForm");
    data = <LoginForm />;
  }

  console.log("final");
  console.log("data", data);
  return data;

  return (
    <div>
      {/* <div>
        user loggedin? :
        {isLoggedin ? "Yes.. Welcome Back" : "No.. Please Login"}
      </div>
      <button className="px-2 bg-amber-500 mx-10" onClick={handleClick}>
        Login
      </button>
      <button className="px-2 bg-amber-500 mx-10" onClick={greeting}>
        Check login status
      </button> */}
      <button
        className="px-2 bg-amber-500 mx-10"
        onClick={() => {
          content({ isLoggedin: true, admin: true });
        }}
      >
        Component
      </button>

      <h1>data: {data}</h1>
    </div>
  );
}
