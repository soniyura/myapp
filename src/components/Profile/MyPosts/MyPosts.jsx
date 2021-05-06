import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = (props) => {

    // масивы который должен как бы приходить с сервера
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'blabla bla', likesCount: 15},
        {id: 4, message: 'ulalala', likesCount: 21}
    ]
    
    // преобразуем (мапим) масив posts
    let postsElements =
        posts.map ( p => <Posts message={p.message} likesCount={p.likesCount}/> )

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}

export default MyPosts;
