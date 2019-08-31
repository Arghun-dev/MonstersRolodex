import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



class App extends Component {

    constructor(props){
        super(props);

        this.state = {
           monsters: [],
           searchField: ''               
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => this.setState({monsters: value}))
            .catch(error => console.log(error));
    }

    changeHandling = (e) => {
        this.setState({searchField: e.target.value})
    }

    render(){
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return(
            <div className="App">
                <h1 className="mt-5">Monsters Rolodex</h1>
                <SearchBox
                placeholder="Search Monsters"
                handlechange={this.changeHandling} 
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }                         
}


export default App;
