import React from 'react';
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let paht = "/dialogs/" + props.id;
    return (
        <div className={d.dialog + ' ' + d.active}>
            <NavLink to={paht}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={d.dialog}>{props.massage}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>

            <div className={d.messages}>
                <Message massage="Hi"/>
                <Message massage="How is your"/>
                <Message massage="Yo"/>
                <Message massage="Yo"/>
                <Message massage="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;