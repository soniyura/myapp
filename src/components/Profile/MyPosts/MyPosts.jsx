import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = (props) => {

    // преобразуем (мапим) масив posts
    let postsElements =
        props.posts.map ( p => <Posts message={p.message} likesCount={p.likesCount}/> )

    //добавление нового поста - начало
    let newPostElement = React.createRef(); // создаем пустую ссылку1
    let addPost = () => {
        props.addPost();
    }
    //добавление нового поста - конец

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updataNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {/*привязка ссылка1 к полю textarea, добавление нового поста - результат*/}
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts;
