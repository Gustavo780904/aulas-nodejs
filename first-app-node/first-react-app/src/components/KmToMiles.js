import React, { Component } from 'react';
import '../style/styles.css';

class KmToMiles extends Component {
    constructor(props){
        super(props);
        this.state = {
            velocidade: "", result: ""
        };
    }
    update= (event) => {
this.setState({[event.target.name]: event.target.value, result: ""});
    }

    convert = () => {
        this.setState({ result: (this.state.velocidade / 1.609).toFixed(2) });    }

    render() {
        return (
            <div className="converterBox">
                <h2>Km para Milhas</h2>
                <input type="text" placeholder="Km" name="velocidade" onChange={this.update}/>
                <button onClick={this.convert}>Converter</button>
                <p>Milhas: {this.state.result}</p>
            </div>
        );
    }
}

export default KmToMiles;