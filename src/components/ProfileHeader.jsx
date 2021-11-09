import React, { Component} from 'react'
import '../static/stylesheets/ProfileHeader.css'
import wall from '../static/images/katie-background.JPG'
class ProfileHeader extends Component {

    render() {
        return (
            <div className='header-wrapper'>
                <img className='wall'  src= {wall} />
                <h1 className='name'>Hi, I'm Katie.</h1>
            </div>
        )
    }
}

export default ProfileHeader