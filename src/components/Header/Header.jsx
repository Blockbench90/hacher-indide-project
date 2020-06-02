import React from "react";
import style from "./Header.module.css";
import img from "../../assets/img/Hacker-Inside_logo.png"
const Header = () => {
    return(
        <div className={style.HeaderWrapper}>
            <div className={style.Logo}>
                <img src={img} className={style.Img}/>
            </div>
            <div className={style.Title}>
                <h1>Ремонт компьютерной техники в <p>Запорожье</p></h1>
            </div>
            <div className={style.Button}>
                <a href="#"><button>Заказать звонок</button></a>
            </div>
        </div>

    )
}
export default Header;