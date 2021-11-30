import React from 'react';

class Coods extends React.Component {
  constructor(prosp) {
    super(prosp)
    this.state = {
      cart: {},
      count: 0,
    }
  }

  render() {
    return(
      <>
        <div className='goods-block'>
          <img src={this.props.image} alt="картинка товара" />
          <p>{this.props.title}</p>
          <p>{this.props.cost}</p>
          <button className='add-to-cart' data-key={this.props.articul}>Add to cart</button>
        </div>
        
      </>
    )
  }


}

export default Coods;