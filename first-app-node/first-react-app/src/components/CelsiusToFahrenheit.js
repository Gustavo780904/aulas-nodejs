import React, { Component } from 'react';
import '../style/styles.css';

class CelsiusToFahrenheit extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: 0, result: ""
        };
    }
    update= (event) => {
this.setState({[event.target.name]: event.target.value, result: ""});
    }

    convert = () => {
this.setState({result: (this.state.temperature*1.8+32).toFixed(2)});    }

    render() {
        return (
            <div className="converterBox">
                <h2>Celsius para Fahrenheit</h2>
                <input type="text" placeholder="Cº" name="temperature" onChange={this.update}/>
                <button onClick={this.convert}>Converter</button>
                <p>Fahrenheit: {this.state.result}</p>
            </div>
        );
    }
}

export default CelsiusToFahrenheit;