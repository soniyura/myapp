import React from "react";
import p from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={p.content}>
      <div>
        <img src="https://fs.tonkosti.ru/sized/c960x400/3q/3r/3q3r3fgg4544os4c440gkskgg.jpg"></img>
      </div>

      <div>ava</div>

      <div>
        my post
        <div>new post</div>
        <div className={p.posts}> 
          <div className={p.item}>post 1</div>
          <div className={p.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
