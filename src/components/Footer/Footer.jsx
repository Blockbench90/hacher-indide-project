import React from "react";
import style from "./Footer.module.css";
import Btn from "../../common/Btn/Btn";
import SimpleMap from "./Map/Map";
import Map from "../../assets/img/Map.png"
import HawToFindAs from "../../common/Player/HawToFindAs";


const Footer = () => {
    return (<div className={style.FooterWrapper}>
            <div className={style.FooterContainer}>
                <div className={style.FooterInner}>
                    <div className={style.MapWrapper}>
                        <img src={Map}/>
                    </div>
                    <div className={style.VideoWrapper}>
                        <HawToFindAs/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;