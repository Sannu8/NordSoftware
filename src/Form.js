import React, { Component } from 'react';
import logo from './logo.png';
/*import edit from './Edit.png';
import trash from './Trash.png';*/
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
       //this.props.onChange({ [e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
  validate = () => {
       let isError = false;
       const errors = {
           idError: "",
           
            fullNameError: "",
           
            emailError: "",
          
            phoneError: ""
          
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
          <div classname="Title">List of participants</div>
            
            <form>
             <table className="FormTable">
                <tr className="AddNew">
                <td className="AddData">
                    <input 
                        type = "text" 
                        placeholder = "Full name" 
                        className= "InputArea" 
                        name="fullName"
                        //hintText = "Full Name"
                        //floatingLabelText="Full name"
                        value= {this.state.fullName} 
                        onChange={e => this.change(e)}
                        /*floatingLabelFixed */ />
                        
                </td>
                <td className="AddData">
                    <input 
                        type = "email" 
                        placeholder = "E-mail address" 
                        className= "InputArea" 
                        name="email" 
                        //hintText = "Email"
                       // floatingLabelText="Email"
                        value= {this.state.email} 
                        onChange = {e => this.change(e)}
                        errorText={this.state.EmailError}
                       /* floatingLabelFixed*/ />
                </td>
                <td className="AddData">
                    <input 
                        type = "tel" 
                        placeholder = "Phone number" 
                        className= "InputArea" 
                        name="phone" 
                        pattern="^[0-9]{2}[0-9]{8}$"
                        // hintText = "Phone Number"
                        //floatingLabelText="Phone Number"
                        value= {this.state.phone} 
                        onChange = {e => this.change(e) }
                        errorText={this.state.phoneError}
                       /* floatingLabelFixed */ />
                </td>
                <td className="ButtonData">
                    <button className = "btn btn-primary" onClick = {e => this.onSubmit(e)}  >Add new</button>
                </td>
            </tr>
                    <tr>
                        <td><span className="errorText">{this.state.fullNameError}</span></td>
                        <td><span className="errorText">{this.state.emailError}</span></td>
                         <td><span className="errorText">{this.state.phoneError}</span></td>
                         <td></td>
                        </tr>
                        
            </table>
                    </form>
                    </p>
                    
      
        
    );
  }
}





