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
import RightSide from "./RightSide";



let arrayImagesToLb = [
    {id: 1, img: mouse2, name: 'mouse2'},
    {id: 2, img: Msi, name: 'Msi'},
    {id: 3, img: Park, name: 'Park'},
    {id: 4, img: Pc, name: 'Pc'},
    {id: 5, img: Piarot, name: 'Piarot'},
    {id: 6, img: RBlue, name: 'RBlue'}
];let arrayImagesToRb = [
    {id: 1, img: RedWolf, name: 'RedWolf'},
    {id: 2, img: Sparta, name: 'Sparta'},
    {id: 3, img: StimRandom, name: 'StimRandom'},
    {id: 4, img: Tournament, name: 'Tournament'},
    {id: 5, img: Wolf1, name: 'Wolf1'},
    {id: 6, img: mark, name: 'mark'}
];
let Lora = (props) => {
    return (<img src={props.img} key={props.id}/>)
}
let newArrayToLeftBlock = arrayImagesToLb.map((el) => {
    return <Lora img={el.img} name={el.name} id={el.id} />
})
let newArrayToRightBlock = arrayImagesToRb.map((el) => {
    return <Lora img={el.img} name={el.name} id={el.id} />
})
const RightSideContainer = () => {
    return (
      <RightSide newArrayToLeftBlock={newArrayToLeftBlock}
                 newArrayToRightBlock={newArrayToRightBlock}/>
    )
}
export default RightSideContainer;
