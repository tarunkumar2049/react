import ProtectedRoute from "@/components/ProtectedRoute";
export default function page() {
  const isLoggedin = true;
  
  return (
    <>
      Form is SUBMITTED.
      <ProtectedRoute isLoggedin={isLoggedin} />
    </>
  );
}
