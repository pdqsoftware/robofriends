import React from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'

import { robots } from './robots';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchText: ''
        }

        // this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    }

    handleSearchTextChange = (event) => {
        this.setState(() => ({ searchText: event.target.value}))
        // const filteredRobots = this.state.robots.filter((robot) => {
        //     return robot.name.toLowerCase().includes(event.target.value.toLowerCase())
        // })
            
        // console.log(filteredRobots)
    }

    render () {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase())
        })
            
        // console.log(filteredRobots)
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = { this.handleSearchTextChange } />
                <CardList robots = { filteredRobots } />
            </div>
        )
    }
}

export default App