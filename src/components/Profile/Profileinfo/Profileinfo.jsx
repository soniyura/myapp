import React from "react"
import p from "./Profileinfo.module.css";

const Profileinfo = () => {
    return (
        <div>
            <div>
                <img src="https://fs.tonkosti.ru/sized/c960x400/3q/3r/3q3r3fgg4544os4c440gkskgg.jpg"></img>
            </div>
            <div className={p.descriptionBlock}>
                ava
            </div>

        </div>
    );
};

export default Profileinfo;
