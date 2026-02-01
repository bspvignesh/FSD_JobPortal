import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div id='container'>
        <div id='header'>
            <img className='logo' src='/job.png' alt=''/>
            <div className='logoText'><span>Job</span> Portal</div>
            <img className='signinIcon' src='/user.png' alt=''/>
            <label className='signinText'>Sign In</label>
        </div>
        <div id='content'>
            <div className='text1'>INDIA'S #1 JOB PLATFORM</div>
            <div className='text2'>Your job search ends here</div>
            <div className='text3'>Discover career opportunities</div>
            <div className='searchBar'>
                <input type='text' className='searchText' placeholder='Search by "skill"'/>
                <input type='text' className='searchLocation' placeholder='Job Location'/>
                <button className='searchButton'>Search jobs</button>
            </div>
        </div>
        <div id='footer'>
            <label className='copyrightText'>Copyright @ 2026. All right reserved.</label>
            <img className='socialmediaIcon' src='./facebook.png' alt=''/>
            <img className='socialmediaIcon' src='./twitter.png' alt=''/>
            <img className='socialmediaIcon' src='./linkedin.png' alt=''/>
        </div>
      </div>
    )
  }
}
