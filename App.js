import React, { Component } from 'react';
import logo from './logo.png';
import edit from './Edit.png';
import trash from './Trash.png';
import './Nord.css';
import NordInput from './components/NordInput';
import NordItem from './components/NordItem';


class App extends Component {
  
  constructor(props){
        super(props);
    
    this.state = {
       datas: [
           {id: 0, text: "Joe Clooney", email: "Joe.Clooney@gmail.com"}, 
           {id: 1, text: "Sandhya Mahat", email: "sandhya.mahat8@yahoo.com"}, 
           {id: 2, text: "Kalyan Giri", email: "kalyangiri1@gmail.com"} 
       ],
        nextID: 3
      
    }
    
      this.addData = this.addData.bind(this);
        this.removeData = this.removeData.bind(this);
    
    }
    
    addData(dataText)  {
      let datas = this.state.datas.slice();
      
    }
    
    removeData(id)  {
        console.log("Removing: ", id);
      
    }
    render() {
    
        
        return (
        <div className="App">
          <div className = "Nord">
        <header className="Page-header">
          <img src={logo} className="Page-logo" alt="logo" />
          Nord Software
        </header>
          <NordInput dataText="" addData = {
        this.addData} />
            <ul>
                {this.state.datas.map((data) => { return <NordItem data={data} key={data.id} id={data.id} removeData={this.removeData}/>} )
                }
            </ul>
        <p className="Page-content">
          <p className="Page-Title">List of participants</p>
        
        <table classname="AddNew">
            <tr className="AddNew">
                <td>
                    <input type = "text" value = "Full name" className= "InputArea" onclick = ""></input>
                </td>
                <td>
                    <input type = "text" value = "E-mail address" className= "InputArea" onclick = ""></input>
                </td>
                <td>
                    <input type = "text" value = "Phone number" className= "InputArea" onclick = ""></input>
                </td>
                <td>
                    <input type = "text" value = "Add new" className= "InputArea" onclick = ""></input>
                </td>
            </tr>
    
            <tr className="Row-title">
                <td >Name</td>
                <td >E-mail address</td>
                <td >Phone Number</td>
                <td ></td>
            </tr>
            <tr className = "Data-Row">
                <td>John Doe</td>
                <td>john.doe@gmail.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" />
               <a href= "#"> <img src={trash} className="trash" alt="trash"   /></a></td>
            </tr>
            <tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr><tr className = "Data-Row">
                <td>George Clooney</td>
                <td>george.clooney@hollywood.com</td>
                <td>0405678471</td>
                <td><img src={edit} className="edit" alt="edit" /><img src={trash} className="trash" alt="trash" /></td>
            </tr>
        </table>
        </p>
      </div>
      </div>
        
    );
  }
}





export default App;
