import React from "react";
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
import LeftSide from "./LeftSide";

let arrayImagesToLb = [
    {id: 1, img: R, name: 'R'},
    {id: 2, img: BlackComp, name: 'BlackComp'},
    {id: 3, img: BlackCompucter, name: 'BlackCompucter'},
    {id: 4, img: BlueComp, name: 'BlueComp'},
    {id: 5, img: BlueStar, name: 'BlueStar'},
    {id: 6, img: ColorPark, name: 'ColorPark'}
];let arrayImagesToRb = [
    {id: 1, img: ColorStim, name: 'ColorStim'},
    {id: 2, img: ColorWolf, name: 'ColorWolf'},
    {id: 3, img: ColWolf, name: 'ColWolf'},
    {id: 4, img: comp, name: 'comp'},
    {id: 5, img: cpu, name: 'cpu'},
    {id: 6, img: mark, name: 'mark'}
];



class LeftSideContainer extends React.Component {
    state = {
        isModalOpen: false
    }
    toggleModal = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}))
    }
    lora = (props) => {
        return <img src={props.img} key={props.id} className={props.name} onClick={this.toggleModal}/>
    }
    newArrayToLeftBlock = arrayImagesToLb.map((el) => {
        return <this.lora img={el.img} name={el.name} id={el.id} className={el.name}/>
    })
    newArrayToRightBlock = arrayImagesToRb.map((el) => {
        return <this.lora img={el.img} name={el.name} id={el.id} />
    })
    render() {
        return (
            <LeftSide newArrayToLeftBlock={this.newArrayToLeftBlock}
                      newArrayToRightBlock={this.newArrayToRightBlock}
            state={this.state}
            toggleModal={this.toggleModal}/>
        )
    }
}
export default LeftSideContainer;
