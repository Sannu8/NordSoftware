import React, { Component } from 'react';
import logo from './logo.png';

import './Nord.css';



const row = (
    x, 
    i, 
    header, 
    handleRemove, 
    startEditing, 
    editIdx,
    nextId,
    handleChange,
   
    stopEditing
) => { 
   const currentlyEditing = editIdx ===i;
    
    return (
        
    <tr className= "Data-Row" key = {'tr-${i}'}>
        {header.map((y, k) => (
        
        <td className= "Datatd" key = {'td-${k}'}> 
        <div className="EditInput">
            {currentlyEditing ? (
                <input className="InputAdd"
                    type="text" 
                    name={y.prop} 
                    onChange ={e => handleChange(e, y.prop, i)} 
                    value = {x[y.prop]} 
        />
                ) : (
                    x[y.prop] 
                    )}
                </div>
        </td>
        
        ))}
        
        <td className="DataEdit">
          
        {currentlyEditing ? (
          <div className="materialCancel"> 
         <input type="button" value="Cancel" className="CancelBtn" onClick={() => stopEditing()} />
         </div>
         ) : (
         
            <span onClick = {() => startEditing(i)}>  
        
            <svg fill="#909090" height="24" viewBox="0 0 24 24" width="24" className="edit" alt="edit" >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
        
            </svg>
            </span>
        )}
       
        </td><td>
       
        {currentlyEditing ? (
         <div className="materialSave">
            <input type="button" value="Save" className="SaveBtn" onClick={() => stopEditing()} />
         </div>
        ) : (
            
        <span onClick = {() => handleRemove(i)}>
             <svg fill="#909090" height="24" viewBox="0 0 24 24" width="24" className= "removeData" alt="trash">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
        </span>
         )}  
       
    </td>
    </tr>
    );
}
export default ({
    data, 
    header, 
    handleRemove, 
    startEditing,
    nextId,
    editIdx, 
    handleChange,
    handleSort,
    sortDirection,
    columnToSort,
    stopEditing}) => 
        
        <table classname="AddNew">
           
            <tr className="Row-title" >
                {header.map((x,i) => (
                    <th key= {'th-${i}'} >
                        <div className="titleRow" onClick={() => handleSort(x.prop)}>
                            <span>{x.name}</span>
                        {columnToSort === x.prop ? (
                            sortDirection === 'asc' ? 
                            <svg fill="#000000" height="16" viewBox="0 0 24 24" width="24" className="arrow">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" fill="#010101"/>
                            </svg>
                             : 
                            <svg fill="#000000" height="16" viewBox="0 0 24 24" width="24" className="arrow">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                            </svg>
                            ) : null}
                        </div> </th>
            ))}
            <th />
            <th />
            </tr>
            
            {data.map((x, i) => 
                      row(
                x, 
                i, 
                header, 
                handleRemove, 
                startEditing, 
                editIdx,
                nextId,
                handleChange,
                
                stopEditing))}
        </table>
        
      
        
    










