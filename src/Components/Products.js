import React, { Component } from "react";
import { connect } from "react-redux";
import util from '../util'
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import {Link } from "react-router-dom";
import styled from "styled-components";


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleAddToCart(e, product) {
    this.props.addToCart(this.props.cartItems, product)
  }
  createOrder = (order) => { alert("Need to save order for" + order.name) };
  openModal = (product) => {
    this.setState({ product});
  }


  openModal = (product) => {
    this.setState({ product});
  };

  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        
        <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
          onClick={()=> this.openModal(product)}
          >
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-primary"
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    ));
    return (
      
   <div>
      <div className="row">{productItems}
      <ModalContainer>
        <div className="row">

       
        {
          product && (
            <Modal isOpen={true}
              onRequestClose={this.closeModal}>
              <Zoom>
                {/* <button onClick={this.closeModal}></button> */}
                <div className="container py" >
                  {/*title*/}
                  <div className="row">
                    <div className="col-6 mx-auto  text-center text-slanted text-blue my-3">
                    <strong>{product.title}</strong> 
                    </div>
                  </div>
                  {/* end title */}
                  {/* product details */}
                  <div className="row">
                    <div className="col-10 max-auto col-md-6 my-3 ">
                    <img src={`products/${product.sku}_2.jpg`} className="img-fluid" alt= "product"/>
                    </div>
                    {/* product text */}
                    <div className="col-10 max-auto col-md-6 my-3 text-capitalize">
                      <h2>{product.title}</h2>
                      <h4 className="text-uppercase">Available Size:  {product.size}
                         </h4>
                      <h4 className="text-blue">
                        <strong>
                          Price: <span/>{util.formatCurrency(product.price)}
                        </strong>
                      </h4>
                      <p className="text-capilaize font-weight-bold mt-3 mb-0">
                        Description:
                      </p>
                       <p className="text-muted lead">{product.description}</p> 
                     <div>
                        <Link to="/">
                         <button>back to products</button>
                       </Link> 

                       <button className="btn btn-primary" 
            onClick={(e) => {
              this.props.addToCart(this.props.cartItems, product)
              this.closeModal();
            }}>Add To Cart</button>
                     </div>
                     
                    </div>
                  </div>
                
              
                  
          
                  
                </div>
              </Zoom>

            </Modal>

          )
     
        }
         </div>
        </ModalContainer>
  </div>
        
   </div>
    )}
      }



const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);



const ModalContainer =styled.div`

position :fixed;
top:0;
left:0;
right:0;
bottom=0:
bacground:rgba(0,0,0,0,3);
display:flex;
align-items:center;
justyfy-content:center;
#modal
`;