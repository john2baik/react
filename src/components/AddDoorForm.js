// import axios from "axios/index";
// import React from "react";
// import {Redirect, Link} from 'react-router-dom';
// //import bootstrap from 'bootstrap'
//
// export default class AddDoorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id:this.guidGenerator(),
//             name:'',
//         };
//
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     guidGenerator() {
//         var S4 = function() {
//             return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
//         };
//         return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
//     }
//
//     handleChange(event) {
//         this.setState({name: event.target.value});
//     }
//
//     async handleSubmit(event) {
//         event.preventDefault();
//         try{
//             await  axios.post("http://localhost:8080/api/addDoor", this.state)
//                 .then( response => {
//                     console.log('response', response)
//                     const newDoor = response.data
//                     console.log('newDoor ', newDoor)
//                     this.setState({state: newDoor})
//                     window.location.reload();
//                 })
//         }
//         catch(error){
//             console.log('Error', error);
//         }
//     }
//
//     render(){
//
//         return (
//            // <div class="form-group">
//             <form onSubmit={this.handleSubmit}>
//                 <h2>Please create a dock door name to add to the current list.</h2>
//                 <label>
//                     Name:
//                     <input type="text" class="form-control" value={this.state.name} placeholder="Door Name" onChange={this.handleChange} />
//                 </label>
//
//                 <button type="submit" value="Submit" class="btn btn-primary"/>
//             </form>
//            // </div>
//         );
//     }
// }
