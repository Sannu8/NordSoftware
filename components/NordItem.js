import React from 'react';
import './NordItem.css';

export default class NordItem extends React.Component {
        constructor(props) {
            super(props);
      
    }
    
    removeData(id) {this.props.removeData(id);
     }
    
    render() {
            return (
        <div className="dataWrapper">
            <button className="removeData" onClick={(e)=> this.removeData (this.props.id)}>remove</button>{this.props.data.text;}
     
        </div>
    )
    }
    }