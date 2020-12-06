import React, { Component } from 'react';

class Disciplina extends Component{
    render(){
        return(
           <a>{this.props.disciplina}</a>
        )
    }
}
export default Disciplina;