import React from "react";

import burgerLogo from '../../assets/Images/burgerLogo.png';

import classes from './Logo.css';

const logo = props =>(
      <div className={classes.Logo} 
      style={{
            height: props.height,
            marginBottom: props.marginBottom}}>
            <img src={burgerLogo} alt='MyBurger'/>
      </div>
);

export default logo;