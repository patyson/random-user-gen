import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import Button from './components/Button'
import './sass/profile.scss'
import './sass/button.scss'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    //set default state to be updated after fetch
    const [user, setUser] = useState([])

    //fetch user info only once
    useEffect(() => {
        updateProfile()
    }, [])

    //fetch random user info
    const fetchUser = async () => {
        const res = await fetch('https://randomuser.me/api')
        const data = await res.json()
        //don't need info part of json, just the user data 'results'
        const userObj = data.results[0]
        setIsLoaded(true)
        return userObj
    }

    //fill state with user info
    async function updateProfile() {
        const userAPI = await fetchUser()
        setUser(userAPI)
    }

    if(!isLoaded) {
        console.log('not loaded yet')
        return <div>Loading...</div>
    } else {
        console.log('loading done')
        return (
            <>
                <Profile user={user}/>
                <Button text={"Generate New Profile"} onClick={updateProfile}/>
            </>
        );
    }
}

export default App;
