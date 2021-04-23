import React from 'react';
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                <div className={d.dialog + ' ' + d.active}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/3">Sveta</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/5">Viktor</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/6">Valera</NavLink>
                </div>
            </div>

            <div className={d.messages}>
                <div className={d.dialog}>Hi</div>
                <div className={d.dialog}>How is your</div>
                <div className={d.dialog}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;