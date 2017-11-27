import React, { Component } from 'react';
import logo from './logo.png';

import './Nord.css';

export default class Form extends React.Component {
 
    state = {
      id: "",
      idError: "",
      fullName: "",
      fullNameError: "",
      email: "",
      emailError: "",
      phone: "",
      phoneError: "",
  };
    
   change = e => {
    
        this.setState({
            [e.target.name]: e.target.value
            
        },
                     
                     );
    };
    
  validate = () => {
       let isError = false;
       const errors = {
           idError: "",
           
            fullNameError: "",
           
            emailError: "",
          
            phoneError: ""
          
       };
      
      const message = {
          successAdd:"Your data has been successfully added!",
          
          successEdit: "Your data has successfully been edited."
      };
       
       if (this.state.fullName.length < 3) {
           isError = true;
           errors.fullNameError = "FullName must be of at least 3 characters.";
           this.setState({
            
            fullName: ""
               })
       }
        else if(this.state.email.indexOf('@') == -1) {
           isError = true;
           errors.emailError = "Valid email address is required.";
             this.setState({
            
            email: ""
            
        });
       }
       
      else if(!this.state.phone.match(/^\d{10}$/)) {
           isError = true;
           errors.phoneError = "Valid 10-digit phone number is required.";
          this.setState({
            
            phone: ""
               })
       }
      
      else { 
            this.setState({
            successAdd:"Your data has been successfully added!",    
            id: "",
            idError: "",
            fullName: "",
            fullNameError: "",
            email: "",
            emailError: "",
            phone: "",
            phoneError: ""
        });
      }
           this.setState({
               ...this.State,
               ...errors
           });
      
       
       return isError;
   };
   
    onSubmit = (e) => {
        e.preventDefault();
       
       
        const err = this.validate();
       
        if (!err) {
              this.props.onSubmit(this.state);
       
            // clearing the form
        this.setState({
            id: "",
            idError: "",
            fullName: "",
            fullNameError: "",
            email: "",
            emailError: "",
            phone: "",
            phoneError: ""
        });
        
       
        
        
        }
        
    };
    
    
    render() {
    
        
        return (
            
            
            <p className="Page-content">
            <span className="success">
            
            {this.state.successAdd}
            
            </span>
          <div classname="Title">List of participants</div>
            
            <form>
             <table className="FormTable">
                <tr className="AddNew">
                <td className="AddData">
                    <input 
                        type = "text" 
                        placeholder = "   Full name" 
                        className= "InputArea" 
                        name="fullName"
                      
                        value= {this.state.fullName} 
                        onChange={e => this.change(e)}
                        />
                        
                </td>
                <td className="AddData">
                    <input 
                        type = "email" 
                        placeholder = "   E-mail address" 
                        className= "InputArea" 
                        name="email" 
                        
                        value= {this.state.email} 
                        onChange = {e => this.change(e)}
                        errorText={this.state.EmailError}
                       />
                </td>
                <td className="AddData">
                    <input 
                        type = "tel" 
                        placeholder = "   Phone number" 
                        className= "InputArea" 
                        name="phone" 
                        pattern="^[0-9]{2}[0-9]{8}$"
                  
                        value= {this.state.phone} 
                        onChange = {e => this.change(e) }
                        errorText={this.state.phoneError}
                        />
                </td>
                <td className="ButtonData">
                    <button className = "btn btn-primary" onClick = {e => this.onSubmit(e)}  >Add new</button>
                </td>
            </tr>
                    <tr>
                        <td className="errortd"><span className="errorText">{this.state.fullNameError}</span></td>
                        <td className="errortd"><span className="errorText">{this.state.emailError}</span></td>
                         <td className="errortd"><span className="errorText">{this.state.phoneError}</span></td>
                         <td className="errortd"></td>
                        </tr>
                        
            </table>
                    </form>
                    </p>
                    
      
        
    );
  }
}










