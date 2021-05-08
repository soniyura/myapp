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
        let text = newPostElement.current.value; // current ссылкается на нативный HTML елемент и у этого елемента берем value
        alert(text);
    }
    //добавление нового поста - конец

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {/*привязка ссылка1 к полю textarea, добавление нового поста - результат*/}
                    <textarea ref={newPostElement}></textarea>
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
