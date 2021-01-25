import React from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'

// import { robots } from './robots';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchText: ''
        }

        // this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> {
                return response.json()
            })
            .then(users => {
                this.setState(() => ({
                    robots: users
                }))
            })
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
            
        if (this.state.robots.length === 0) {
            return <h3>Loading...</h3>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = { this.handleSearchTextChange } />
                    <Scroll>
                        <CardList robots = { filteredRobots } />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App