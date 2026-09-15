export default function Contact() {
  const number = 9988554477;
  const email = "react123@gmail.com";
  return (
    <div className="flex flex-col bg-gray-100 items-center">
      <h1>Phone Number : {number}</h1>
      <h1>Email : {email}</h1>
      <h1>Address : New delhi - 44</h1>
    </div>
  );
}
