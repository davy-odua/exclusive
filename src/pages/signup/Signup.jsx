import './Signup.css'
import login from '../../../images/login.jpg'
import { FcGoogle } from "react-icons/fc";

function SignUp(){
    return(
        <>
        <div className="sign-container">
            <div className="sign-right">
                <img src={login} alt="" />
            </div>
            <div className="sign-left">
                <div className="sign-title">
                    <h1>Create an account</h1>
                    <p>Enter your details below</p>
               </div>
                <form action="">
                    <div className='form-row'>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className='form-row'>
                        <input type="text" placeholder='Email or Phone Number' />
                    </div>
                    <div className='form-row'>
                        <input type="password" placeholder='Password' />
                    </div>
                    <button className='sign-btn' id='red'>Create Account</button> <br />
                    <button className='sign-btn' ><FcGoogle className='google-icon' /> Sign up with Google</button>
                </form>
                <div className="sign-text">
                    <p>Already have an account? <a href="">Log In</a></p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default SignUp;