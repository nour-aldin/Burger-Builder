import React, { Component } from "react";

import classes from './Modal.css'

import Aux from '../../containers/hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/BackDrop/Backdrop'

class Modal extends Component {

      shouldComponentUpdate(nextprops, nextState){
            return nextprops.show !== this.props.show

      }

      componentDidUpdate(){
            console.log('[Modal] Will Update')
      }
      render(){
            return(
                  <Aux> 
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            <div 
            className={classes.Modal}
            style={{
                  transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: this.props.show ? '1' : '0' 
            }}
            >
                  {this.props.children}
            </div>
      </Aux>
            )
      }
}

export default Modal