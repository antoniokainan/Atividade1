import React, { Component } from 'react';

class Cabecalho extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.aluno}</h2>
                <a>{this.props.curso}</a>
            </div>
        )
    }
}
export default Cabecalho;