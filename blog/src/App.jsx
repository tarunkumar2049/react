import { useContext } from "react";
import { BlogContext } from "./Context";

function App() {
  const blog = useContext(BlogContext);
  console.log("data", blog);
  return (
    <div>
      <p>example paragraph</p>
    </div>
  );
}

export default App;
