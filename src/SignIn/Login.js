import React, { Component } from "react";
import "./sign.css"
import axios from 'axios'

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
        username:'',
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
    let url ="https://main-java-app.herokuapp.com/login"
    axios.post(url,{
      ...user
    }).then(response=>{
      response.setMessage("Successfuly loggedin")
    }).catch(err=>{
  ("please register first")
    })

  }

    render() {
        return (
            <form className=" border border-primary col-lg-6 offset-lg-3" onSubmit={e=>this.handleSubmit(e,this.state)}>
              
                <h3>Sign In</h3>
                <div className="col-4">
                <div className="form-group ">
                    <label>Email address</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" placeholder="Enter email" name="username" />
                </div>
               
                <div className="form-group ">
                    <label col-md >Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password" name="password" />
                </div>
              
                

                    
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                   
                </div>
               
             
                <div className="form-group col-md-4">
                <button type="submit" className="btn btn-primary btn-block row">Submit</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
                
                 
                 </div>
                 
            </form>
        );
    }
}