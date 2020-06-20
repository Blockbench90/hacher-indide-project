import React from 'react';
import ReactDOM from 'react-dom';
import style from './ModalWindowQuiz.module.css'
import Button from '@material-ui/core/Button';


class Modal extends React.Component {
    state = {
        titleWin: 'Поздравляю! Вы ВЫИГРАЛИ!!!!!!',
        textWin: 'Назовите пароль при посищении:',
        phrases: {Zte: {id: 1, phrase:'Асталависта Бэйби'},
            Zta: {id: 2, phrase:'Ларису Ивановну хочу!'},
            Ztc: {id: 3, phrase:'Спасибо, я пешком постою.'},
            Zts: {id: 4, phrase:'Мне бы такую работу, чтобы поменьше работы.'},
            Ztr: {id: 5, phrase:'А то я тебе оторву голову и скажу, шо так и було!'},
            Ztq: {id: 6, phrase:'Пан атаман, кони стоят пьяные, хлопцы запряженные.'},
            Zty: {id: 7, phrase:'И шо я в тебя такой влюбленный.'}},
        finalText: 'И получите гарантированную скидку 10%'
    }
    rand = () => {
        return this.state.phrases.Math.random()
    }

    componentWillMount() {
        this.root = document.createElement('portal')
        document.body.appendChild(this.root)
    }

    componentWillUnmount() {
        document.body.removeChild(this.root)
    }

    closeModal = this.props.onClose

    render() {
        return ReactDOM.createPortal(
            <div className={style.Overlay}>
                <div className={style.Modal}>
                    <div className={style.InnerModal}>
                        <h1>{this.state.titleWin}</h1>
                        <p><span>{this.state.textWin}</span>{this.state.phrases.Ztq.phrase}</p>
                    </div>
                    <span className={style.FinalText}>{this.state.finalText}</span>
                    <Button onClick={this.closeModal} variant="contained" color="primary" disableElevation>
                        Ясно, Понятно
                    </Button>
                </div>
            </div>,
            this.root
        );
    }
}

export default Modal;