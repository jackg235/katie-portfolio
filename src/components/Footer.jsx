import React, { Component } from 'react'
import '../static/stylesheets/Footer.css'
import insta from '../static/images/social media/insta.svg'
import fb from '../static/images/social media/fb.svg'
import linkedin from '../static/images/social media/linkedin.svg'
import twitter from '../static/images/social media/twitter.svg'
import github from '../static/images/social media/github.svg'

class Footer extends Component {
    render() {
        return(
            <footer class="page-footer foot pt-4">
                <div class='container-fluid text-center'>
                    <a href='https://www.facebook.com/kathryn.goettle7' target="_blank" rel="noopener noreferrer">
                        <img src={fb} className='logo' alt=''/>
                    </a>
                    <a href='https://www.linkedin.com/in/katie-goettle-61a966190/' target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} className='logo' alt=''/>
                    </a>
                    <a href='https://twitter.com/katiegoettle?lang=en' target="_blank" rel="noopener noreferrer">
                        <img src={twitter} className='logo' alt=''/>
                    </a>
                </div>
                <div class="footer-copyright text-center py-3">
                    Katie Goettle © 2021
                </div>
            </footer>
        )
    }
}

export default Footer