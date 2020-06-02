import React from "react";
import style from "./Btn.module.css"


const Btn = (props) => {
    return <div className={style.bigButton}>
        <button className={style.hvrBounceToBottom}>{props.props}</button>
    </div>
}
export default Btn;