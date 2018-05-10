// import axios from "axios/index";
// import {Component} from "react";
//
// import styled from 'styled-components'
//
// class DoorList extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             Doors: [],
//         };
//     }
//
//     getAllDoors = async () => {
//
//         try {
//             const response = await axios.get("http://localhost:8080/api/getAllDoors");
//             const doors = await response.data;
//             this.setState({Doors: doors})
//         } catch (error){
//             console.log('Error: ', error)
//         }
//
//     };
//
//     componentDidMount() {
//         this.getAllDoors();
//     }
//
//
//     render(){
//         return(
//             <div>
//                 <h1>Doors List</h1>
//
//                 <table width="100%">
//                     <tbody>
//                     <tr>
//                         <th>Name </th>
//                         <th>ID</th>
//                     </tr>
//                     <tr>
//                         <td>
//                             {this.props.Doors.map((door, index) => {
//                                 return ( <h5 key={index}> {door.name}</h5>  )})}
//                         </td>
//
//                         <td>
//                             {this.props.Doors.map((door, i ) => {
//                                 return ( <h5 key={i}> {door.id} </h5>  )})}
//                         </td>
//                     </tr>
//                     </tbody>
//                 </table>
//
//             </div>
//         )
//     };
// }