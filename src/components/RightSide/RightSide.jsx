import React from "react";
import style from "./RightSide.module.css";
import mouse2 from "../../assets/img/Png/mouse2.png";
import Msi from "../../assets/img/Png/Msi.png";
import Park from "../../assets/img/Png/Park.png";
import Pc from "../../assets/img/Png/Pc.png";
import Piarot from "../../assets/img/Png/Piarot.png";
import RBlue from "../../assets/img/Png/RBlue.png";
import RedWolf from "../../assets/img/Png/RedWolf.png";
import Sparta from "../../assets/img/Png/Sparta.png";
import StimRandom from "../../assets/img/Png/StimRandom.png";
import Tournament from "../../assets/img/Png/Tournament.png";
import Wolf1 from "../../assets/img/Png/Wolf1.png";
import mark from "../../assets/img/Png/mark.png";

const RightSide = () => {
    let Surpdize = () => {
        alert("Не угадал, попробуй еще раз!")
    };
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.LeftBlock}>
                <img src={mouse2} className={style.mouse2}/>
                <img src={Msi} className={style.Msi} onClick={Surpdize}/>
                <img src={Park} className={style.Park}/>
                <img src={Pc} className={style.Pc}/>
                <img src={Piarot} className={style.Piarot}/>
                <img src={RBlue} className={style.RBlue}/>
                </div>
                <div className={style.RightBlock}>
                <img src={RedWolf} className={style.RedWolf}/>
                <img src={Sparta} className={style.Sparta}/>
                <img src={StimRandom} className={style.StimRandom}/>
                <img src={Tournament} className={style.Tournament}/>
                <img src={Wolf1} className={style.Wolf1}/>
                <img src={mark} className={style.mark}/>
                </div>
            </div>
        </div>
    )
}
export default RightSide;