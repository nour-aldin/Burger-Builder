import React from "react";
import classes from './Toolbar.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems';
//import DrawerToggle from './DrawerToggle';
import DrawerToggle from '../SideDrawer/DrawerToggle'

const toolbar = props =>(
      <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo/> 
            <nav className={classes.DesktopOnly}>
                  <NavigationItems/>
            </nav>

      </header>
);

export default toolbar;