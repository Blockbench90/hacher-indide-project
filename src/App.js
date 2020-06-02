import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import ProfPage from "./components/HomePage/ProfPage/ProfPge";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import SimplePage from "./components/HomePage/SimplePage/SimplePage";
import ModalWindow from "./common/ModalWindowQuiz/ModalWindowQuiz";

const App = (props) => {
    return (
        <div className="AppWrapper">
            <div className="leftWrapper">
                <LeftSide/>
            </div>
            <div className="AppContainer">
                <div className="HeaderWrapper">
                    <Header/>
                </div>
                <div className="BodyWrapper">
                    <div className="ProfileContainer">
                        <Switch>
                            <Route path='/' exact component={() => <HomePage/>}/>
                            <Route path='/prof' render={() => <ProfPage/>}/>
                            <Route path='/simple' render={() => <SimplePage/>}/>
                        </Switch>
                    </div>
                </div>
                <div className="FooterWrapper">
                    <Footer/>
                </div>
            </div>
            <div className="RightWrapper">
                <RightSide/>
            </div>
        </div>
    );
}

export default App;
