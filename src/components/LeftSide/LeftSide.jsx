import React from "react";
import style from "./LeftSide.module.css";
i

const LeftSide = (props) => {
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
export default LeftSide;
