import "bootstrap/js/src/collapse.js";
import React from 'react'
import '../static/stylesheets/Navbar.css'
import resume from '../static/files/resume.pdf'
import fb from '../static/images/social media/fb.svg'
import linkedin from '../static/images/social media/linkedin.svg'
import twitter from '../static/images/social media/twitter.svg'

class Navbar extends React.Component {

    render() {
        return (
                <nav class="navbar navbar-expand-md navbar-light bg-light ">
                    <p className='navbar-brand brand'> <a className='brand-name' href='/'>Katie Goettle</a></p>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav" >
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link home-nav" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href={resume} target = "_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href="mailto:katiegoe14@gmail.com">Contact</a>
                            </li>
                        </ul>
                        <ul class='navbar-nav social-part flex-row ml-md-auto d-md-flex'>

                            <li>
                                <a className = 'fa' href='https://www.linkedin.com/in/katie-goettle-61a966190/' target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} className='logo-nav' alt=''/>
                                </a>
                            </li>
                            <li>
                                <a className = 'fa' href='https://www.facebook.com/kathryn.goettle7' target="_blank" rel="noopener noreferrer">
                                    <img src={fb} className='logo-nav' alt=''/>
                                </a>
                            </li>
                            <li>
                                <a className = 'fa' href='https://twitter.com/katiegoettle?lang=en' target="_blank" rel="noopener noreferrer">
                                    <img src={twitter} className='logo-nav' alt=''/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
        )

    }
}
export default Navbar