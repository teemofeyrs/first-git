import React from "react";
import classesUserPersonalPage from './UserPersonalPage.module.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Home from "../Home";
import MainRewivew from './../MainRewivew/MainRewivew';
import FastInfo from "../FastInfo/FastInfo";
import Portfolio from "../../Parts/Portfolio/Portfolio";

const UserPersonalPage = (props) => {
    return(
        <div className={classesUserPersonalPage.UserPersonalPage}>
            <div className={classesUserPersonalPage.fastInfo}>
                <FastInfo userInfo={props.userInfo}/>
            </div>
            <div className={classesUserPersonalPage.userRewivew}>
                <MainRewivew userInfo={props.userInfo}/>
                <div className={classesUserPersonalPage.contentUserRewivew}>
                    <Switch>
                        <Route path='/profile' exact><Home/></Route>
                    </Switch>
                </div>
            </div>
            <div>
               <div className={classesUserPersonalPage.buttonPos}>
                   <NavLink to={'/settings'} className={classesUserPersonalPage.settingsButton}>Settings</NavLink>
               </div>
                <Portfolio/>
            </div>
        </div>
    );
}
export default UserPersonalPage;