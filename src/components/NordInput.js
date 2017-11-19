import React from 'react';
import './NordInput.css';
import edit from './Edit.png';
import trash from './Trash.png';

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
                <p className="Page-content">
          List of participants
        
        <table classname="AddNew">
            <tr className="AddNew">
                <td>
                    <input type = "text" value = {this.state.value} placeholder = "Full name" onChange={this.handleChange} />
                </td>
                <td>
                    <input type = "email" placeholder = "E-mail address" className= "InputArea"  />
                </td>
                <td>
                    <input type = "integer" placeholder = "Phone number" className= "InputArea"  />
                </td>
                <td>
                      
               
                <button className = "btn btn-primary"  onClick= {() => this.addData(this.state.value)}>Add New</button>
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