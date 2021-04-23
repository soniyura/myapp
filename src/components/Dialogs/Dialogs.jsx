import React from 'react';
import d from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                <div className={d.dialog + ' ' + d.active}>
                    Dimych
                </div>
                <div className={d.dialog}>
                    Andrey
                </div>
                <div className={d.dialog}>
                    Sveta
                </div>
                <div className={d.dialog}>
                    Sasha
                </div>
                <div className={d.dialog}>
                    Viktor
                </div>
                <div className={d.dialog}>
                    Valera
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