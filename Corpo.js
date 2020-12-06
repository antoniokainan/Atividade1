import React, { Component } from 'react';
import Foto from './foto.jpg';

class Corpo extends Component{
    render(){
        return(
           <span>
               <img src={Foto} width="150"/>
           </span>
        )
    }
}
export default Corpo;