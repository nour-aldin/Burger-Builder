import React, { Component } from "react";

import Aux from "../hoc/Auxiliary/Auxiliary";
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  state ={
    ingredients: {
      salad : 0,
      bacon : 0,
      cheese : 0,
      meat : 0
    },
    price: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState(ingredients){
    
    let sum = Object.keys(ingredients).map(igKey=>{
      return ingredients[igKey];
    }).reduce((sum,el)=>{
      return sum+el
    },0);
    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;

    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;

    const priceIngredients = INGREDIENT_PRICES[type];
    const newPrice = this.state.price + priceIngredients;

    this.setState({price: newPrice, ingredients:updatedIngredient});

    this.updatePurchaseState(updatedIngredient);
  }

  removeIngredient = (type) =>{
    if(!this.state.ingredients[type])
      return;
    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredient ={
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;

    const priceIngredients = INGREDIENT_PRICES[type];
    const newPrice = this.state.price - priceIngredients;

    this.setState({price: newPrice, ingredients:updatedIngredient});

    this.updatePurchaseState(updatedIngredient);
  }

  purchaseHandler= () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () =>{
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () =>{
    alert('you Continue!')
  }
  render() {
    const disabledInfo = {...this.state.ingredients};
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          price={this.state.price.toFixed(2)}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredient}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.price}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
