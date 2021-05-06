import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Massage";

const Dialogs = (props) => {
    // масивы который должен как бы приходить с сервера
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let massages = [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How is your'},
        {id: 3, massage: 'Youuu'},
        {id: 4, massage: 'Yoy'},
        {id: 5, massage: 'Yol'},
        {id: 6, massage: 'Yoooool'},
    ]

    //мапим  преобразуем масив диалогов что бы не писать много кода
    // eslint-disable-next-line react/jsx-no-undef
    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>  );
    //  преобразуем масив сообщений
    let massagesElements = massages.map( m => <Message massage={m.massage}/> );

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