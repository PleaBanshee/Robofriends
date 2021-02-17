import React, { Component } from 'react';
import CardList from './CardList.js';
import { robots } from './robots.js';
import SearchBox from './SearchBox.js';

//  The State of a component is an object that holds some information that may change over the lifetime of the component.

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    // Search method
    onSearchChange = (event) => {
        // event.target.value: returns value typed in search box (component)
        this.setState({searchField: event.target.value}); // always invoke this when you want to change state
    }

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()); // check if search value exists in robots array. Works for upper and lowercase searches
        });
        console.log(filterRobots)
        return ( // remember to always return one component
            <div className="tc">
                <h1 className="mb3">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterRobots}/> {/* state can be passed down as props to children */}
            </div>
        );
    }
}

export default App;