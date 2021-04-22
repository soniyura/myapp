import React from "react";
import p from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <textarea></textarea>
      
      <div>
        <button>Add post</button>
      </div>

      <div className={p.posts}></div>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />

    </div>
  );
};

export default MyPosts;
