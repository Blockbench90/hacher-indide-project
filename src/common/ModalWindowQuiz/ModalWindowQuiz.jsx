import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const ModalWindow = (props) => {
    let subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    let openModal = () => {
        setIsOpen(true);
    }
    let afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }
    let closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div>
            {/*<button onClick={openModal}>Open Modal</button>*/}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
            </Modal>
        </div>
    );
}
ReactDOM.render(<ModalWindow/>, document.getElementById('modal'));
// export default ModalWindow;