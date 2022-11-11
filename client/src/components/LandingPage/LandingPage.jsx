import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Landingpage/LandingPage.css'

const LandingPage = () => {
    return (

        <div className="landingPage">
            <h1 id='tracker'>On The Job <br />Tracker</h1>
            <form id='landing-Page'>
                <h1 id='signin'>Sign In</h1>
                <h6 id='email'>Email Address</h6>
                <input type="text" name='email' id='reg-email' required></input>
                <br />
                <h6 id='email'>Password</h6>
                <input className="input" id='reg-pass' type="password"  name='password' required></input>
                <br />
                {/* <h6 id='email'>Confirm Password</h6>
                <input className="input" id='con-pass' type="password" placeholder='   Confirm' name='confirm' required></input>                <br /> */}
                <button id="submit" name="submit" type='submit' >Sign In</button>
                <br />
                <h4 id='newUser'>New User?</h4>

            </form>
        </div>
    )
}

export default LandingPage