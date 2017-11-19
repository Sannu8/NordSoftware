import React, { Component } from 'react';
import logo from './logo.png';
import edit from './Edit.png';
import trash from './Trash.png';
import './App.css';
import NordInput from './components/NordInput';

class App extends Component {
  
    constructor(props) {
        super(props);
    
    this.state = {
       datas: [
           {id: 0, text: "Joe Clooney"}, 
           {id: 1, text: "Sandhya Mahat"}, 
           {id: 2, text: "Kalyan Giri"} 
       ],
        nextID: 3
      
    }
      
        this.addData = this.addData.bind(this);
        this.removeData = this.removeData.bind(this);
    
    }
    
    addData(dataText)  {
        console.log("Data added: ", dataText);
      
    }
    
    removeData(id)  {
        console.log("Removing: ", id);
      
    }
    
    render() {
    
        
        return (
        <div className="App">
            <div className = "Nord">
            <header className="Page-header">
                <img src={logo} className="Page-logo" alt="logo" />Nord Software
            </header>
            <NordInput dataText="" addData = {
        this.addData} />
            
            </div>
      </div>
        
    );
  }
}





export default App;
