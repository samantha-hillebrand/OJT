import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Register.css'

const Register = () => {
    return (
        
        <div id="register-div">
            <h1 id= 'ojt'>On The Job <br />Tracker</h1>
            <form id='registerForm'>
            <h1 id= "reg-here">New User</h1>
            <h3 className='tags'>First Name</h3>
            <input type="text"  name='firstname' id='first-name' required></input>
            <br />
            <h3 className='tags'>Last Name</h3>
            <input type="text"  name='lastname' id='last-name' required></input>
            <br />
            <h3 className='tags'>Email</h3>
           <input type="text" name='email' id='email' required></input>
            <br />
            <h3 className='tags'>Password</h3>
            <input className="input" id='reg-pass' type="password"  name='password'  required></input>
            <br />
            <h3 className='tags'>Confirm Password</h3>
            <input className="input" id='con-pass' type="password" name='confirm'  required></input>
            <br />
            <button id="submit2" name="submit" type='submit' >Register</button>

        </form>


        
    </div >
  )
}

export default Register