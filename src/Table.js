import React, { Component } from 'react';
import logo from './logo.png';
/*import edit from './Edit.png';
import trash from './Trash.png';*/
import './Nord.css';
import App from './App'

const row = (x, i, header) => 
    <tr className= "Data-Row" key = {'tr-${i}'}>
        {header.map((y, k) => 
        <td key = {'td-${k}'}> 
            {x[y.prop]} 
        </td>
        )}
    <td>
    <svg fill="#909090" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="edit" alt="edit" >
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
             <svg fill="#909090" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className= "removeData" alt="trash"
               >
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
    </td>
    </tr>;

export default ({data, header}) => 
        
        <table classname="AddNew">
           
            <tr className="Row-title" >
                {
            header.map((x,i) =>
                <th key= {'th-${i}'}> 
                    
                    {x.name}
                </th>)
}
            </tr>
            
            {data.map((x, i) => row(x, i, header))}
        </table>
        
      
        
    







