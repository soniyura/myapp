import React from "react";
import p from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={p.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU"></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Posts;
