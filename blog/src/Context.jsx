import { createContext, useContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  console.log("Blogs", blogs);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();

        setBlogs(data);
      } catch (err) {
      } finally {
      }
    }

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
}

// export default function useBlogs() {
//   return useContext(BlogContext);
// }
