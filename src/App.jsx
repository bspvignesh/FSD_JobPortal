import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  showSignin(){
    let popup=document.getElementById("popup");
    popup.style.display="block";
  }
  closeSignin(event){
    if(event.target.id==="popup"){
      let popup=document.getElementById("popup");
      popup.style.display="none";
    }
  }

  render() {
    return (
      <div id='container'>
        <div id='popup' onClick={this.closeSignin}>
          <div id='popupWindow'>
            <div id='popupHeader'>Login</div>
            <div id='signin'>
              <label className='usernameLabel'>User name</label>
              <input type='text' id='username'/>
              <label className='passwordLabel'>Password</label>
              <input type='password' id='password'/>
              <div className='forgotPassword'>Forgot <label>Password?</label></div>
              <button className='signinButton'>Sign In</button>
              <div className='div1'></div>
              <div className='div2'>Don't have an account?
                <label>SIGN UP NOW</label>
              </div>
            </div>
            <div id='signup'>Sign Up</div>
          </div>
        </div>
        <div id='header'>
            <img className='logo' src='/job.png' alt=''/>
            <div className='logoText'><span>Job</span> Portal</div>
            <img className='signinIcon' src='/user.png' alt='' onClick={this.showSignin}/>
            <label className='signinText' onClick={this.showSignin}>Sign In</label>
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
