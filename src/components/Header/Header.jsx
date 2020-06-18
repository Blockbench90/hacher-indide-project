import React from "react";
import style from "./Header.module.css";
import img from "../../assets/img/Hacker-Inside_logo.png";
import Dialog from '@material-ui/core/Dialog';

const Header = () => {
    let state = {
        open: false
    }
    return(
        <div className={style.HeaderWrapper}>
            <div className={style.Logo}>
                <img src={img} className={style.Img} />
            </div>
            <div className={style.Title}>
                <h1>Ремонт компьютерной техники в <p>Запорожье</p></h1>
            </div>
            <div className={style.Button}>
                <a><button >Заказать звонок</button></a>
            </div>
            <Dialog
                open={state.open}
                onRequestClose = {() => {state.open(false)}}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                ;alsdfj;lasjdf;lkajs;dlfkja;sldfkj;asldkfj;alskdjf;alskjdf;lajkl;
                <button></button>
            </Dialog>
        </div>

    )
}
export default Header;