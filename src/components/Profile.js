

import {FaEnvelope } from 'react-icons/fa';
import {FaPhoneAlt } from 'react-icons/fa';

const Profile = ({ user }) => {
    console.log(user.length)
    if(user.length == 0) {
        //waiting for props to load, otherwise likely to result in undefined
        return <div>Loading...</div>
    } else {
        return (
            <div className="profileContainer">
                <div className="imgContainer">
                    <img src={user.picture.large} />
                </div>
                <div className="textContainer">
                    <h1>{user.name.first}</h1>
                    <p>
                        <span className="fa-icon"><FaEnvelope /></span>
                        <a href="mailto:{user.email}">{user.email}</a>
                    </p>
                    <p>
                        <span className="fa-icon"><FaPhoneAlt /></span>
                        <a href="tel:{user.phone}">{user.phone}</a>
                    </p>
                </div>
            </div>
        )
    }
}

Profile.defaultProps = {
    picture: process.env.PUBLIC_URL + 'img/undefinedPic.jpg'
}

export default Profile
