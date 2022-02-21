import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({monsters: user}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {

    let fileredMonsters = this.state.monsters.filter(monster => 
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange}/>
        <CardList monsters={fileredMonsters}/>
      </div>
    );
  }
}

export default App;
