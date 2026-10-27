import { useState } from "react";
import NeetMDS from "./NeetMDS";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <div className="flex flex-col bg-gray-100 justify-center">
      <Routes>
        <Route path={`/`} element={<NeetMDS />} />
        <Route path={`/blog`} element={<BlogDetails />} />
        <Route path={`/blog/:id`} element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
