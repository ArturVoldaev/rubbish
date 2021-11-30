import React from 'react';

import goodsArr from './goods.json';

import Goods from './Goods/Goods';
import Cart from './Cart/Cart';

import './App.css';

class App extends React.Component {
  constructor(prosp) {
    super(prosp)
    this.state = {
      cart: {},
      count: 0,
    }
  }

  addToCard = (evt) => {
    evt.preventDefault();
    if (!evt.target.classList.contains('add-to-cart')) return false; 

    let cartTemp = this.state.cart;
    cartTemp[evt.target.dataset.key] ? cartTemp[evt.target.dataset.key]++ : cartTemp[evt.target.dataset.key]=1;
    this.setState({catr: cartTemp});
    let count = this.state.count;
    count++;
    this.setState({count: count})
    
  }

  render() {
    let showCart;
    if (this.state.count !==0) {
      showCart =  <Cart cart={this.state.cart} goods={goodsArr}/>     
    } else {
      showCart = 'Empty';
    }
    return(
      <>
        <div className='container'>
          <h1>Cart</h1>
          <div className='goods-field' onClick={this.addToCard}>
          {goodsArr.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul}/>)}
          </div>
          {showCart}
        </div>
      </>
    )
  }


}

export default App;
