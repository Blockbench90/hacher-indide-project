import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import ProfPage from "./components/HomePage/ProfPage/ProfPge";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import SimplePage from "./components/HomePage/SimplePage/SimplePage";
import ModalWindow from "./common/ModalWindowQuiz/ModalWindowQuiz";
import LeftSideContainer from "./components/LeftSide/LeftSideContainer";
import RightSideContainer from "./components/RightSide/RightSideContainer";

const App = (props) => {
    return (
        <div className="AppWrapper">
            <div className="leftWrapper">
                <LeftSideContainer/>
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
                <RightSideContainer/>
            </div>
        </div>
    );
}

export default App;
