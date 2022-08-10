import React, { createContext, useState } from "react";
import { createBlog, useData } from "../helpers/crud";
// const initialValues = {
//   imageUrl: "",
//   title: "",
//   date: "",
//   content: "",
//   email: "",
// };

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [info, setInfo] = useState([]);
  const [flag, setFlag] = useState(false);
  // createBlog(info);
  // setInfo(initialValues);

  return (
    <BlogContext.Provider
      value={{ createBlog, info, setInfo, useData, flag, setFlag }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;