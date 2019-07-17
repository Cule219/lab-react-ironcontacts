import React, { Component } from 'react';
import Contact from './components/Contact';
import myData from './contacts.json';
import './App.css';
import AddContact from './components/AddContact';
import TextAreaAndSelect from './components/TextAreaAndSelect';


class App extends Component {
  state = {
    data: myData.slice(0,5)
  }

  AddRandomContact = (movie) => {
    let randomContact = movie || myData[Math.floor(myData.length * Math.random())];
    this.setState({
      data: this.state.data.concat(randomContact)
    });
  }
  SortByName = () => {
    this.setState({
      data: this.state.data.sort((a, b) => a.name > b.name )
    })
  }
  SortByPopularity = () => {
    this.setState({
      data: this.state.data.sort((a,b) => a.popularity < b.popularity)
    })
  }
  DeleteContact = (e) => {

    let rand = this.state.data
    rand.splice(e, 1)
    this.setState({
      data: rand
    })
  }
  render() {
    return (
      <div>
          <TextAreaAndSelect />
          <AddContact addContact={this.AddRandomContact}/>
          <button onClick={this.AddRandomContact}>Add Random Contact</button>
          <button onClick={this.SortByName}>Sort by name</button>
          <button onClick={this.SortByPopularity}>Sort by popularity</button>
          <Contact data={this.state.data} delete={this.DeleteContact}/>
      </div>
    );
  }
}

export default App;
