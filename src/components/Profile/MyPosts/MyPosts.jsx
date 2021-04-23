import React from "react";
import p from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={p.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div className={p.posts}></div>
            <Posts message="Hi, how are you?" like="15"/>
            <Posts message="It's my first post" like="16"/>
        </div>
    );
};

export default MyPosts;
