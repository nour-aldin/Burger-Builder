import React from "react";

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/BackDrop/Backdrop';
import Aux from '../../containers/hoc/Auxiliary/Auxiliary';
const sideDrawer = props =>{
      let attachedClasses = [classes.SideDrawer, classes.Close];
      if (props.open) {
            attachedClasses = [classes.SideDrawer, classes.Open]; 
      }
      return(
            <Aux>
                  <Backdrop show={props.open} clicked = {props.closed}/>      
                  <div className={attachedClasses.join(' ')}>
                        <Logo height='11%' marginBottom ='32px'/>
                        <nav>
                              <NavigationItems/>
                        </nav>
                  </div>
            </Aux>
      );
};

export default sideDrawer;