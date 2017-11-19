import React, { Component } from 'react';
import logo from './logo.png';
import edit from './Edit.png';
import trash from './Trash.png';
import './Nord.css';
import NordInput from './components/NordInput';
import NordItem from './components/NordItem';

class Contacts extends Component {
  
    
    render() {
    
        
        return (
        <div className="Nord">
        <header className="Page-header">
          <img src={logo} className="Page-logo" alt="logo" />
          Nord Software
        </header>
        <p className="Page-content">
          List of participants
        
        <table classname="AddNew">
            <tr className="AddNew">
                <td>
                    <input type = "text" placeholder = "Full name" className= "InputArea" onclick = ""></input>
                </td>
                <td>
                    <input type = "text" placeholder = "E-mail address" className= "InputArea" onclick = ""></input>
                </td>
                <td>
                    <input type = "long int" placeholder = "Phone number" className= "InputArea" onclick = ""></input>
                </td>
                <td>
                    <input type = "text" placeholder = "Add new" className= "InputArea" onclick = ""></input>
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
        
    );
  }
}

export default Contacts;
