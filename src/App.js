//import './App.css';
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'

//function App() {
//    const [error, setError] = useState(null)
//    const [isLoaded, setIsLoaded] = useState(false)
//    const [user, setUser] = useState({})

//    useEffect(() => {
//        fetchUser()
//    }, [])

//    //get random user info
//    const fetchUser = async () => {
//        const res = await fetch('https://randomuser.me/api')
//        const data = await res.json()
//        //don't need info part of json, just the user data 'results'
//        const userObj = data.results[0]
//        setIsLoaded(true)
//        setUser(userObj)
//        const userName = userObj.name.first
//    }


//    return (
//        <div>
//            <Header firstName={user.name.first}/>
//            <Home />
//        </div>
//    );
//}

class App extends React.Component {
    componentDidMount() {
        const fetchUser = async () => {
            fetch('https://randomuser.me/api')
            .then(res => res.json())
            .then(data => this.setState({user: data}))
        }

    }

    render() {
        console.log(this)
       return (
            <div>
                <Header firstName={this.name.first}/>
                <Home />
            </div>
        );
    }
}

export default App;
