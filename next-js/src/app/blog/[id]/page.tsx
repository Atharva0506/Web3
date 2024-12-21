import React from "react";

const Blog = async ({ params }: any) => {
  const id = params.id;
  const data =  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())

const blog = await data
  return <div>{
    JSON.stringify(blog)
    }</div>;
};

export default Blog;
