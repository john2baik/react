import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// import {Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Door></Door>
          <DoorList></DoorList>
      </div>
    );
  }
}

class Door extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.guidGenerator(),
            name:'',
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    guidGenerator() {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

     async handleSubmit(event) {
        event.preventDefault();
        try{
           await  axios.post("http://localhost:8080/api/addDoor", this.state)
                .then( response => {
                    console.log('response', response)
                    const newDoor = response.data
                    console.log('newDoor ', newDoor)
                    this.setState({state: newDoor})
                    window.location.reload();
                })
        }
        catch(error){
            console.log('Error', error);
        }
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Please create a dock door name to add to the current list.</h2>
                <label>
                     Name:
                    <input type="text" value={this.state.name} placeholder="Door Name" onChange={this.handleChange} />
                 </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class DoorList extends Component{
    constructor(props){
        super(props);
        this.state = {
            Doors: [],
        };
    }

    getAllDoors = async () => {

        try {
          const response = await axios.get("http://localhost:8080/api/getAllDoors");
            const doors = await response.data
            this.setState({Doors: doors})
        } catch (error){
            console.log('Error: ', error)
        }

    };

    componentDidMount() {
        this.getAllDoors();
    }


    render(){
        const doorList = this.state.Doors.map((door, i) => {
            return (
                <h2 key={i}>Door name: {door.name} Door ID: {door.id} </h2>
            )
        });
        return (
        <div>
            <ul>
                {doorList}
                {/*{this.state.Doors}*/}
            </ul>
        </div>
    )};
}

export default App;
