import React from "react";
import style from "./RightSide.module.css";


const RightSide = (props) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.LeftBlock}>
                    {props.newArrayToLeftBlock}
                </div>
                <div className={style.RightBlock}>
                    {props.newArrayToRightBlock}
                </div>
            </div>
        </div>
    )
}
export default RightSide;
