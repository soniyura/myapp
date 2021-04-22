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
      <Posts message='Hi, how are you?'/>
      <Posts message="It's my first post"/>

    </div>
  );
};

export default MyPosts;
