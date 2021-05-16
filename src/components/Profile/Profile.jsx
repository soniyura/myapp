import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updataNewPostText={props.updataNewPostText}
                     addPost={props.addPost} />
        </div>
    );
};

export default Profile;
