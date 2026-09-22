import './Login.css'
import login from '../../../images/login.jpg'
import { FcGoogle } from "react-icons/fc";

function Login(){
    return(
        <>
        <div className="sign-container">
            <div className="sign-right">
                <img src={login} alt="" />
            </div>
            <div className="sign-left">
                <div className="sign-title">
                    <h1>Log in to Exclusive</h1>
                    <p>Enter your details below</p>
               </div>
                <form action="">
                    <div className='form-row'>
                        <input type="text" placeholder='Email or Phone Number' />
                    </div>
                    <div className='form-row'>
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="login-btn">
                        <button className='left'>Login</button>
                        <button className='right'> <a href="">Forget Password?</a> </button>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Login;
