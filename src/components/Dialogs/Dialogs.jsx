import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Massage";

const Dialogs = (props) => {
    //мапим  преобразуем масив диалогов что бы не писать много кода
    // масив JSX елементов
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>  );
    //  преобразуем масив сообщений
    let massagesElements = props.state.massages.map( m => <Message massage={m.massage}/> );

    //добавление нового сообщения - начало
    let newMassageElement = React.createRef();
    let addMassage = () => {
        let text = newMassageElement.current.value;
        alert(text);
    }
    //добавление нового сообщения - конец
    // вывовим масив елементов
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}
                {/*привязка ссылка1 к полю textarea, добавление нового сообщения - результат*/}
                <div>
                    <div>
                        <textarea ref={newMassageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addMassage}>Add messages</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;