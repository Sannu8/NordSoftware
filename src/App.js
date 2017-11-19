import React, { Component } from 'react';
import logo from './logo.png';
/*import edit from './Edit.png';
import trash from './Trash.png'; */
import './Nord.css';
import Form from "./Form";
import Table from "./Table";

import NordItem from './components/NordItem';


class App extends Component {
    
    
    state = {
        data: [
             {id: 1, fullName: "John Doe", email: "joe.clooney@gmail.com", phone: "0405678471"}, 
           {id: 2, fullName: "Sandhya Mahat", email: "smahat.official@gmail.com", phone: "0404178995"}, 
           {id: 3, fullName: "Kalyan Giri", email: "kalyangiri1@gmail.com", phone: "0456478705"}, 
            {id: 4, fullName: "Rupesh Chaudhary", email: "rupesh.chaudhary@gmail.com", phone: "0405685271"},
           {id: 5, fullName: "Matti Tunturi", email: "mattitunturi1@gmail.com", phone: "0405678478"},
           {id: 6, fullName: "Kimo Tuomalainen", email: "kim.tuo454@gmail.com", phone: "0405675691"},
           {id: 7, fullName: "Hanne Lankari", email: "hanne.lankari414@gmail.com", phone: "0405678471"},
           {id: 8, fullName: "Hawler Abbas", email: "hawler.abbas123@gmail.com", phone: "0405569471"},
           {id: 9, fullName: "Eric Nishio", email: "eric.nishio@gmail.com", phone: "0408528471"},
           {id: 10, fullName: "Eyas Taha", email: "eyas.taha52@gmail.com", phone: "0405123671"},
           {id: 11, fullName: "Rita Tuoja", email: "rita.tuoja8@gmail.com", phone: "0445698471"},
           {id: 12, fullName: "Sanna Lindstrom", email: "sanna.lindstrom3@gmail.com", phone: "0405458571"},
           {id: 13, fullName: "Chandra Kanth Neupane", email: "chandra.neupane12@gmail.com", phone: "0405414471"},
           {id: 14, fullName: "Sujan Shrestha", email: "sujan.shrestha111@gmail.com", phone: "0405641471"},
           {id: 15, fullName: "Maya Tuomas", email: "maya.tuomas52@gmail.com", phone: "0405675891"},
           {id: 16, fullName: "Pragya Thapa", email: "pragya.thapa@yahoo.com", phone: "0405696371"},
           {id: 17, fullName: "Sabnam Mahat", email: "sabnam.mahat1@gmail.com", phone: "0405685271"},
           {id: 18, fullName: "Sajana Karmacharya", email: "sajana.karmacharya111@gmail.com", phone: "0405611171"},
           {id: 19, fullName: "Ratna Bahadur Mahat", email: "ratna.mahat111@gmail.com", phone: "0405622271"},
           {id: 20, fullName: "Balsam Almurraghani", email: "balsam.almurraghani@gmail.com", phone: "0405625271"}
        ],
        nextID: 21
    }
        /*this.removeData = this.removeData.bind(this) */ ;

  
         
    removeData(id)  {
       this.setState({
           datas: this.state.datas.filter((data, index) => data.id !== id)
      })
      
    }


render() {
        return (
           
       <div className = "App">
            <header className="Page-header">
                <img src={logo} className="Page-logo" alt="logo" />Nord Software
            </header>
             <div className = "Nord">
           
        <Form onSubmit = {submission => this.setState({
            data: [...this.state.data, submission],
            nextId: ++this.state.nextID
            
            })
            } />
        <p>
            {JSON.stringify(this.state.fields, null, 2)}
        </p>
            <Table 
                    data= {this.state.data}
                    
                    header= {[
                            /* {
                            name: "ID"  ,
                           prop: 'id',
                          },*/
                           {
                            name: "Name"  ,
                           prop: 'fullName',
                          },
                           {
                            name: "E-mail address",
                           prop: 'email',
                          },
                           {
                            name: "Phone number",
                           prop: 'phone',
                          }
                            ]} />
            </div>
        </div>
        
            );
        
    }
}

export default App;