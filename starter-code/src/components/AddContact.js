import React, { Component } from 'react'

export default class AddContact extends Component {
    constructor(props){
        super(props)

        this.state = {
                name: '',
                pictureUrl: '',
                popularity: ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
                    <label htmlFor="pictureUrl">pictureUrl: </label>
                    <input type="text" name="pictureUrl" value={this.state.pictureUrl} onChange={(e)=>this.handleChange(e)}/>
                    <label htmlFor="name">Popularity: </label>
                    <input type="text" step="0.01" name="popularity" value={this.state.popularity} onChange={e=>this.handleChange(e)}/>    
                    <input type="submit"value="Submit" />
                </form>
            </div>
        )
    }
    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    // handleNameInput = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // handleImgInput = (e) => {
    //     this.setState({
    //         pictureUrl: e.target.value
    //     })
    // }
    // handlePopularityInput = (e) => {
    //     this.setState({
    //         popularity: e.target.value
    //     })
    // }
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({
            name: '',
            pictureUrl: '',
            popularity: ''
        })
    }
}
