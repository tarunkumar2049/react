export default function Logged(isLoggedin) {
  return (
    <div>
      <h1>logged in</h1>
      <h1>{isLoggedin ? "go to the dashboard" : "Log in"}</h1>
    </div>
  );
}
