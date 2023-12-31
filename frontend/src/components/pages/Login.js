import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { login } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar'
import Breadcrumbs from '../Breadcrumbs'

//login page
function Login( props ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password)
            .then(() => {
                props.onLoginSuccess(); // Set authentication status in parent component
                // Redirect to the intended page after successful login
                navigate(props.intendedPage || '/');
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    };

    return (
        <div className=" Gradient">
            {/* nav bar */}
            <Navbar ></Navbar>
            {/* page */}
            <div className="col-md-6 col-sm-10 mt-4 mx-auto p-0">
                <Breadcrumbs></Breadcrumbs>
                <h1 className="p-2 text-center " style={{color: "white"}}>Login</h1>
                {/* hypothetically submit would send the info and sign you in on the front end */}
                <form onSubmit={handleSubmit} className="p-2 text-center " >
                    <hr style={{color: "lightblue"}}/>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                    <br/><br/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <br/>
                    <hr style={{color: "lightblue"}}/>
                    <button type="submit" className="btn btn-secondary">Login</button>
                    <br/><br/><br/><br/>
                </form>
            </div>
            {/* footer */}
            <div className="bg-dark">
                <div className="d-flex justify-content-center text-center">
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>About</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Help</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>FAQ</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Top 10</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Socials</h5>
                </div>
            </div>
            {/* extra design stuff */}
            <div className="bg-dark">
                <div className="d-flex justify-content-center text-center">
                    <hr/>
                </div>
            </div>
            <div className="bg-dark">
                <div className="d-flex justify-content-center text-center">
                    <hr/>
                </div>
            </div>
            <div className="bg-dark">
                <div className="d-flex justify-content-center text-center">
                    <hr/>
                </div>
            </div>
            <div className="bg-dark">
                <div className="d-flex justify-content-center text-center">
                    <hr/>
                </div>
            </div>
            <div className="bg-dark">
                <div className="d-flex justify-content-center text-center">
                    <hr/>
                </div>
            </div>
            <div className="bg-dark">
                <div className="d-flex justify-content-center text-center">
                    <hr/>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;