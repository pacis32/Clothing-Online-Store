import React, { Component } from "react";
import { connect } from "react-redux";
import util from '../util';
import { addToCart, removeFromCart } from "../actions/cartActions";
import Fade from 'react-reveal/Fade';




class Basket extends Component {

  

  
  
  render() {
    const checkoutHandler =()=>{
     // @TODO
      window.location = "./Login?redirect=shipping"
    }
    const { cartItems } = this.props;

    return (
      
     
    
              
      
      <Fade left cascade>
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
         <h1>Basket is empty</h1> 
        ) : (
          <div>
            You have {cartItems.length} items in the cart. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
        
           
            <ul className="container-fluid text-center d-none d-lg-block">
            
              <div className="col-10 mx-auto col-lg-2" ></div>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="row my-1 text-capitlize text center">
                  <div className="col-10 mx-auto col-md-2">
                  <p className="text-uppercase">products</p>
           
                  <img src={`products/${item.sku}_2.jpg`} alt={item.title} />
                  </div>
                  
                  <div className="col-10 mx-auto col-md-2" >
                  <p className="text-uppercase">title</p>
                  <b>{item.title}</b>
                  </div>
                  
                  <div className="col-10 mx-auto col-lg-2"> 
                 <p className="text-uppercase">price</p>
                 {util.formatCurrency(item.price)}
                 </div>
                 
                
                <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase">remove from the cart</p>
                  <button
                
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </button>
                  <br />
                  </div>
                  </div>
                </li>
              ))}
            
            <div/>
            <div> 
                 <p className="text-uppercase">total</p>

                 <b>
              {" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
                </div>
                <div>
            <button
              onClick={checkoutHandler}
              className="btn btn-primary"
            > 
              Proceed to checkout
            </button>
            </div>
          </ul>
        
        )}
      </div>
      
      </Fade>
      
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);