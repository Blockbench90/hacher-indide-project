import React from "react";
import style from "./LeftSide.module.css";
import R from "../../assets/img/Png/R.png";
import BlackComp from "../../assets/img/Png/BlackComp.png";
import BlackCompucter from "../../assets/img/Png/BlackCompucter.png";
import BlueComp from "../../assets/img/Png/BlueComp.png";
import BlueStar from "../../assets/img/Png/BlueStar.png";
import ColorPark from "../../assets/img/Png/ColorPark.png";
import ColorStim from "../../assets/img/Png/ColorStim.png";
import ColorWolf from "../../assets/img/Png/ColorWolf.png";
import ColWolf from "../../assets/img/Png/ColWolf.png";
import comp from "../../assets/img/Png/comp.png";
import cpu from "../../assets/img/Png/cpu.png";
import mark from "../../assets/img/Png/mark.png";

const LeftSide = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.LeftBlock}>
                    <img src={R} className={style.R}/>
                    <img src={BlackComp} className={style.BlackComp}/>
                    <img src={BlackCompucter} className={style.BlackCompucter}/>
                    <img src={BlueComp} className={style.BlueComp}/>
                    <img src={BlueStar} className={style.BlueStar}/>
                    <img src={ColorPark} className={style.ColorPark}/>
                </div>
                <div className={style.RightBlock}>
                    <img src={ColorStim} className={style.ColorStim}/>
                    <img src={ColorWolf} className={style.ColorWolf}/>
                    <img src={ColWolf} className={style.ColWolf}/>
                    <img src={comp} className={style.comp}/>
                    <img src={cpu} className={style.cpu}/>
                    <img src={mark} className={style.mark}/>
                </div>
            </div>
        </div>
    )
}
export default LeftSide;