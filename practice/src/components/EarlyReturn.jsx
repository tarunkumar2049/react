import { useState } from "react";

export default function EarlyReturn() {
  //   const [user, setUser] = useState({
  //     name: "tarun",
  //     email: "tarun123@gmail.com",
  //   });
//   const [user, setUser] = useState(0);
  function UserProfile({ user, loading, error }) {
    if (!user) return <p>User not found</p>;
    if (loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;
    UserProfile();
  }
  return (
    <div>
      <span>DATA</span>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
}
