import React, { useState} from 'react';
import '../style/util.css';
import '../style/main.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/iconic/css/material-design-iconic-font.min.css';
import './vendor/animate/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animsition/css/animsition.min.css';
import './vendor/select2/select2.min.css';
import './vendor/daterangepicker/daterangepicker.css';
import home from '../assets/img/casa1.png';
import inicio from './Principal';





const Login=()=>{
    
    const [datos, setDatos] = useState({
        username: '',
        password: '',
    })
    const handleInputChange = (event) => {
        //console.log(event.target.name)
         //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + [datos.username] + ' ' + [datos.password])
    }

    return (
        <>
       
            <body>
                <div className="limiter ">
                <div className="container-login100 " >
                        <div className="esp_home">
                            <a className=" " href="/">
                                <img className="" src={home} alt=""></img></a></div>
                        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                            <form className="login100-form " onSubmit={enviarDatos}>
                                <span className="login100-form-title p-b-49">
                                    Login
                                </span>

                                <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                                    <span className="label-input100">Username</span>
                                    <input className="input100" type="text" name="username" placeholder="Type your username" onChange={handleInputChange} />
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <span className="label-input100">Password</span>
                                    <input className="input100" type="password" name="password" placeholder="Type your password" onChange={handleInputChange}/>
                                </div>

                                <div className="text-right p-t-8 p-b-31">
                                    
                                        Forgot password?
                                   
                                </div>

                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                            
                                        <a type="submit" className="login100-form-btn btn-primary" href="./inicio">
                                            Login
                                        </a>
                                    </div>
                                </div>


                                <div className="flex-col-c p-t-15">
                                    <span className="txt1 p-b-17">
                                        Or Sign Up Using
                                    </span>

                                    <a href="registro" className="txt2">
                                        Sign Up
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="dropDownSelect1"></div>
                <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
                <script src="vendor/animsition/js/animsition.min.js"></script>
                <script src="vendor/bootstrap/js/popper.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="vendor/select2/select2.min.js"></script>
                <script src="vendor/daterangepicker/moment.min.js"></script>
                <script src="vendor/daterangepicker/daterangepicker.js"></script>
                <script src="vendor/countdowntime/countdowntime.js"></script>
                <script src="js/main.js"></script>

            </body>
            
    </>
        )};

export default Login;

