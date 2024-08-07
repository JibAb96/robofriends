import React, { Component } from 'react';
import CardLists from '../components/CardsList.js';
import SearchBox from "../components/SearchBox.js"
import "./App.css"
import Scroll from "../components/Scroll.js"
import ErrorBoundary from '../components/ErrorBoundary.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ?
            <h1>Loading</h1>
            :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardLists robots={filteredRobots} />
                        </ErrorBoundary>

                    </Scroll>
                </div>
            )

    }
}
export default App 