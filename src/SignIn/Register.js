import React, { Component } from "react";
import axios from 'axios'

export default class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
        

        firstname:"",
        lastname:"",
        email:"",
        password:""



    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e){
   let value = e.target.value;
   let name = e.target.name;
   this.setState({[name]:value})
  }



  handleSubmit(e,user){
    e.preventDefault();
   console.log(user)
    let url ="https://main-java-app.herokuapp.com/register"
    axios.post(url,{
      ...user
    }).then(response=>{
      console.log(response)
    }).catch(err=>{
      console.error(err)
    })

  }
    render() {
        return (
          
            <form className=" border border-primary col-lg-6 offset-lg-3" onSubmit={e=>this.handleSubmit(e,this.state)} >
                <h3>Sign Up</h3>
                 
                <div className="form-group md-4 ">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                
                <div className="form-group md-4">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group md-4">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group md-4">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                 <span/>
                <buttonLink  type="submit" className="btn btn-primary btn-block">Sign Up</buttonLink>
              
              
                
            </form>
        ); 
    }
}