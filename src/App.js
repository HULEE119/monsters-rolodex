import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor () {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  } 

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // if create a class method, then need to bind in constructor 
  // handleChange(e) {
  //   this.setState( { searchField: e.target.value } )
  // }

  // if use arrow function, then no need to bind 
  handleChange = (e) => {
    this.setState( { searchField: e.target.value } )
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox 
          placeholder='search monsters' 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }

}


export default App;
