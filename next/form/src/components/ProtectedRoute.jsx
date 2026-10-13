import Logged from "./Logged";

export default function ProtectedRoute({ isLoggedin }) {
  if (isLoggedin) {
    return <Logged isLoggedin={isLoggedin} />;
  }

  return (
    <div>
      <h1> Unlogged </h1>
    </div>
  );
}
