import React from "react";
import style from "./LeftSide.module.css";
import Modal from "../../common/ModalWindowQuiz/ModalWindowQuiz";


class LeftSide extends React.Component {
    render() {
        return (
            <div className={style.Wrapper}>
                <div className={style.Container}>
                    <div className={style.LeftBlock}>
                        {this.props.newArrayToLeftBlock}
                        {this.props.state.isModalOpen &&
                        <Modal onClose={this.props.toggleModal}/>}
                    </div>
                    <div className={style.RightBlock}>
                        {this.props.newArrayToRightBlock}
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftSide;
