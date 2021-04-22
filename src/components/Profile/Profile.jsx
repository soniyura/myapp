import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import p from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={p.content}>
      <div>
        <img src="https://fs.tonkosti.ru/sized/c960x400/3q/3r/3q3r3fgg4544os4c440gkskgg.jpg"></img>
      </div>

      <div>ava</div>

      <MyPosts />
    </div>
  );
};

export default Profile;
