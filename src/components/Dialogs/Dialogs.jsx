import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Massage";

const Dialogs = (props) => {
    //мапим  преобразуем масив диалогов что бы не писать много кода
    // eslint-disable-next-line react/jsx-no-undef
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>  );
    //  преобразуем масив сообщений
    let massagesElements = props.state.massages.map( m => <Message massage={m.massage}/> );

    // вывод диалогов
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {massagesElements}
            </div>
        </div>
    )
}

export default Dialogs;