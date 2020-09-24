import { Link } from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import React, { Component } from 'react'
import "../App.css"
import {ButtonContainer} from './Button';



export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary 
       navbar-dark px-sm-5">
      
      <Link to='/'>
     <img src={logo} alt='store'
     className='navbar-brand' />
    
      </Link>
     <ul className="navbar-nav align-tems-center">
        <li className='nav-item ml-5'>
         <Link to='/' className='nav-link'> 
           <title name= "Products" />
         </Link>
        </li>
      
     </ul>
     <Link to='/cart' className='ml-auto'>
       <ButtonContainer>
         <span className='mr-2'>
         <i className="fas fa-cart-plus" />
         </span>
         my cart  
       </ButtonContainer>
     </Link>
     <Link to='/Login' className='ml-auto'>
       <ButtonContainer>
        
         Login 
       </ButtonContainer>
     </Link>
     <Link to='/register' className='ml-auto'>
       <ButtonContainer>
        
        Register
       </ButtonContainer>
     </Link>
      </nav>  
    );
  }


}

  const nav = styled.nav`
  background:var(--maindarkBlue);
  .nav-link{
    color: nav(--mainWhite);
    font-size:1rem;
    text-transform:capitalize

  `;


