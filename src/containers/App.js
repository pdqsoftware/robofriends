import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'
// import DeleteMe from '../components/DeleteMe'
// import WelcomeTechTest from '../components/Welcome-TechTest'

// import { robots } from './robots';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            tech: { primary: true, user: 'Paul' },
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
        const { robots, searchText } = this.state
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchText.toLowerCase())
        })
        // const techVar = { primary: false, user: 'Paul' }
                    
        if (!robots.length) {
            return <h3>Loading...</h3>
        } else {
            return (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange = { this.handleSearchTextChange } />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = { filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                    {/* <DeleteMe /> */}
                    {/* <WelcomeTechTest techStuff = { { primary: false, user: 'Paul' } } />
                    <WelcomeTechTest techStuff = { techVar } /> */}
                </div>
            )
        }
    }
}

export default App