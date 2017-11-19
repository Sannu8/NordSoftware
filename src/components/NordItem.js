import React from 'react';
import './NordItem.css';
import edit from './Edit.png';
import trash from './Trash.png';

export default class NordItem extends React.Component {
        constructor(props) {
            super(props);
      
    }
    
    removeData(id) {this.props.removeData(id);
     }
    
    render() {
            return (
        <div className="dataWrapper">
                
        <svg fill="#909090" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className= "removeData" alt="trash" onClick={(e)=> this.removeData (this.props.id)}>
                
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
                
        </svg>
         
            <button className="removeData" onClick={(e)=> this.removeData (this.props.id)}>Remove</button>
            
            {this.props.data.text}
     
        </div>
    )
    }
    }