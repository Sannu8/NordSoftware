import React from 'react';
import './NordInput.css';


export default class NordInput extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.addData = this.addData.bind(this);
        
    }
    
    handleChange(e){
        this.setState({ value: e.target.value});
      
    }
    
    addData(data) {
        //Ensuring the text is not empty
        if (data.length > 0) {
        this.props.addData(data);
        this.setState({value: ''});
    }
        
      
    }
    
    render() {
        return (
            <div>
                <input type = "text" value = {this.state.value} placeholder = "Full name" onChange={this.handleChange} />
                <button className = "btn btn-primary"  onClick= {() => this.addData(this.state.value)}>Add New</button>
            </div>
        );
    }
}