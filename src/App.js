import React, { Component } from 'react';
import './App.css';
import axios from "axios/index";

// import AddDoorForm from '../src/components/AddDoorForm'
// import DoorList from '../src/components/DoorList'
//



import Bootstrap from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <div className="jumbotron">
                <AddDoorForm/>
                <DoorList/>
            </div>
        );
    }
}


class AddDoorForm extends React.Component {
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

    render(){

        return (
            // <div class="form-group">
            <form onSubmit={this.handleSubmit}>
                <h2>Please create a dock door name to add to the current list.</h2>
                <label>
                    Name:
                    <input type="text" className="form-control" value={this.state.name} placeholder="Door Name" onChange={this.handleChange} />
                </label>

                <button type="submit" value="Submit" class="btn btn-primary"/>
            </form>
            // </div>
        );
    }
}

class DoorList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            doors: [],
        };
    }

    getAllDoors = async () => {

        try {
            const response = await axios.get("http://localhost:8080/api/getAllDoors");
            const doors = await response.data;
            console.log(doors);
            this.setState({doors: doors})
        } catch (error) {
            console.log('Error: ', error)
        }

    };

    componentDidMount(){
        this.getAllDoors();
    }


    render(){
        return (
            <div>
                <h1>Doors List</h1>

                <table width="100%">
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.doors.map((door, index) => {
                                return (<h5 key={index}> {door.name}</h5>)
                            })}
                        </td>

                        <td>
                            {this.state.doors.map((door, i) => {
                                return (<h5 key={i}> {door.id} </h5>)
                            })}
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default App;


