import"../style/Logins.css"
import {Link} from "react-router-dom"
function Login() {
    return (
        <>
            <div className="App">
                <div className="Loginbox">
                    <div className="Userlogin">
                        <div className="User">User Login </div>
                    </div>
                    <div className="Email">Username or Email</div>
                    <div className="Emailtext">
                        <input type="text" placeholder="Username or Email" className="Emailinputtext"></input>
                    </div>
                    <div className="Email">Password</div>
                    <div className="Emailtext">
                        <input type="text" placeholder="Password" className="Emailinputtext"></input>
                    </div>
                    <div className="Loginbutton">
                        <Link to="/afterlogin"><button>LOGIN</button></Link>
                    </div>
                    <div className="Forget">Forget Password?</div>
                    <div className="Notaccount">
                        <div className="Account">Don't have an account?</div>
                        <div className="Signup">Sign Up</div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Login;