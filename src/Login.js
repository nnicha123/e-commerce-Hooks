import React, { Component } from 'react'
import './Login.css'
import user from './cakes/user.png'
class Login extends Component {
    render() {
        return (
            <div className="loginOuterDiv">
                <div className="login">
                    <img style={{ width: 'auto', height: '120px',marginTop:'30px' }} src={user} />
                    <form>
                        <div className="form-group flex-group">
                            <div className="group-left">
                                <div>First Name</div>
                                <input style={{ width: '140px'}}/>
                            </div>
                            <div className="group-left">
                                <div>Last Name</div>
                                <input style={{ width: '140px'}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>Username</div>
                            <input />
                        </div>
                        <div className="form-group password">
                            <div>Password</div>
                            <input />
                        </div>
                        <button style={{margin:'0 auto'}} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
