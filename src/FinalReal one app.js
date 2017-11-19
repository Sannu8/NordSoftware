import React, { Component } from 'react';
import logo from './logo.png';
import edit from './Edit.png';
import trash from './Trash.png';
import './Nord.css';
import NordInput from './components/NordInput';
import NordItem from './components/NordItem';


class App extends Component {
  
    constructor(props) {
        super(props);
    
    this.state = {
       datas: [ 
           {id: 1, text: "John Doe", email: "joe.clooney@gmail.com", phone: "0405678471"}, 
           {id: 2, text: "Sandhya Mahat", email: "smahat.official@gmail.com", phone: "0404178995"}, 
           {id: 3, text: "Kalyan Giri", email: "kalyangiri1@gmail.com", phone: "0456478705"}, 
            {id: 4, text: "Rupesh Chaudhary", email: "rupesh.chaudhary@gmail.com", phone: "0405685271"},
           {id: 5, text: "Matti Tunturi", email: "mattitunturi1@gmail.com", phone: "0405678478"},
           {id: 6, text: "Kimo Tuomalainen", email: "kim.tuo454@gmail.com", phone: "0405675691"},
           {id: 7, text: "Hanne Lankari", email: "hanne.lankari414@gmail.com", phone: "0405678471"},
           {id: 8, text: "Hawler Abbas", email: "hawler.abbas123@gmail.com", phone: "0405569471"},
           {id: 9, text: "Eric Nishio", email: "eric.nishio@gmail.com", phone: "0408528471"},
           {id: 10, text: "Eyas Taha", email: "eyas.taha52@gmail.com", phone: "0405123671"},
           {id: 11, text: "Rita Tuoja", email: "rita.tuoja8@gmail.com", phone: "0445698471"},
           {id: 12, text: "Sanna Lindstrom", email: "sanna.lindstrom3@gmail.com", phone: "0405458571"},
           {id: 13, text: "Chandra Kanth Neupane", email: "chandra.neupane12@gmail.com", phone: "0405414471"},
           {id: 14, text: "Sujan Shrestha", email: "sujan.shrestha111@gmail.com", phone: "0405641471"},
           {id: 15, text: "Maya Tuomas", email: "maya.tuomas52@gmail.com", phone: "0405675891"},
           {id: 16, text: "Pragya Thapa", email: "pragya.thapa@yahoo.com", phone: "0405696371"},
           {id: 17, text: "Sabnam Mahat", email: "sabnam.mahat1@gmail.com", phone: "0405685271"},
           {id: 18, text: "Sajana Karmacharya", email: "sajana.karmacharya111@gmail.com", phone: "0405611171"},
           {id: 19, text: "Ratna Bahadur Mahat", email: "ratna.mahat111@gmail.com", phone: "0405622271"},
           {id: 20, text: "Balsam Almurraghani", email: "balsam.almurraghani@gmail.com", phone: "0405625271"}
       ],
        nextID: 21
      
    }
      
        this.addData = this.addData.bind(this);
        this.removeData = this.removeData.bind(this);
    
    }
    
    addData(dataText, dataEmail, dataPhone)  {
      let datas = this.state.datas.slice();
      datas.push({id: this.state.nextId, text: dataText, email: dataEmail, phone: dataPhone});
        this.setState({
            datas: datas,
            nextId: ++this.state.nextID
        } );
    }
    
    removeData(id)  {
       this.setState({
           datas: this.state.datas.filter((data, index) => data.id !== id)
      })
      
    }
    
    render() {
    
        
        return (
        /* <div className="App">
            <div className = "Nord">
            <header className="Page-header">
                <img src={logo} className="Page-logo" alt="logo" />Nord Software
            </header>
            */
            <NordInput dataText="" dataEmail = "" dataPhone="" addData = {this.addData} />
            
            
            <ul>
                {this.state.datas.map((data) => { return <NordItem data={data} key={data.id} id={data.id} removeData={this.removeData}/>} )
                }
            </ul>
            </div>
      </div>
        
    );
  }
}

export default App;