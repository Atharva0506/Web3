import React from "react";

const Blog = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  const blog = await res.json();
  return <div>  {JSON.stringify(blog, null, 2)}</div>;
};

export default Blog;
