import React from "react";
import style from "./HomePage.module.css";
import gif from "../../assets/video/Gif.m4v"
import text from "../../assets/video/Text.m4v"
import gm from "../../assets/img/gm.png";
import max from "../../assets/img/max.png";
import {NavLink} from "react-router-dom";
import Btn from "../../common/Btn/Btn";


const HomePage = () => {
    return (
        <div className={style.ProfileWrapper}>
            <div className={style.Inner}>
                <div className={style.UpBlock}>
                    <div className={style.GifItem}>
                        <div className={style.GifVtw}>
                            {/*<video src={gif} className={style.VideoGif} autoPlay={gif} loop={true}/>*/}
                            <video id="background-video" className={style.VideoGif} loop autoPlay>
                                <source src={gif} type="video/mp4"/>
                                <source src={gif} type="video/ogg"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={style.VideoItem}>
                        <div className={style.Vtw}>
                            <video className={style.VideoText} loop autoPlay>
                                <source src={text} type="video/mp4"/>
                                <source src={text} type="video/ogg"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div className={style.DownBlock}>
                    <div className={style.SimpleUser}>
                        <div className={style.item}>
                            <div className={style.img}>
                                <img src={gm}/>
                            </div>
                            <div className={style.text}>
                                <h2>Я знаю, что такое комПуКтуер!</h2>
                                <span><p>Просто чето не работает</p>
                                    <p>Не знаю что делать</p></span>
                                <div className={style.SimpleBtnToHome}>
                                    <NavLink to="/simple">
                                        <Btn props={"Нажмите сюда"}/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.ProfiUser}>
                        <div className={style.item}>
                            <div className={style.img}>
                                <img src={max}/>
                            </div>
                            <div className={style.text}>
                                <h2>Я ШаРю</h2>
                                <span>Знаю, что такое видюха,
                                и могу рассказать по чем сейчас
                                термопаста</span>
                                <span>* с 10.00 до 17.00 бесплатно</span>
                                <div className={style.ProfiBtnToHome}>
                                    <NavLink to="/prof">
                                        <Btn props={"Жмякни сюда"}/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;