import React, { Component } from 'react'

export default class TextAreaAndSelect extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectInputValue: "Notebook",
            textAreaInputValue: "..."
        }
    }

    handleChange(e) {
        const{name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        alert(this.state.selectInputValue + '<===>' + this.state.textAreaInputValue);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <select name="selectInputValue" value={this.state.selectInputValue} onChange={e => this.handleChange(e)} >
                    <option value={this.state.textAreaInputValue}>{this.state.textAreaInputValue}</option>
                    <option value="Star Wars">Star Wars</option>
                    <option value="The Godfather">The Godfather</option>
                    <option value="Titanic">Titanic</option>
                    <option value="Seven">Seven</option>
                </select>
        
            <label> Why is this your favorite movie? </label>
            <textarea name="textAreaInputValue" value={this.state.textAreaInputValue} onChange={e => this.handleChange(e)} />
            <input type="submit" value="Submit" />

            </form>
        )
    }
}
