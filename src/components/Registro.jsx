import React, {useState} from 'react';
import '../style/style.css';
import home from '../assets/img/casa1.png'


const Registro=()=>{

    const [datos, setDatos] = useState({
        name: '',
        email:'',
        password: '',
        re_password:'',
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
        console.log('datos...' + [datos.name])
        console.log('datos...' + [datos.email])
        console.log('datos...' + [datos.password])
        console.log('datos...' + [datos.re_password])
    }
    return (
        <div>
            <body>
    

            <div className="main">

                <section className="signup">
                <div className="esp_home">
                            <a className=" " href="/">
                                <img className="" src={home} alt=""></img></a></div>
                    {/* <img src="images/signup-bg.jpg" alt=""> */}
                    <div className="container1">
                        <div className="signup-content">
                            <form method="POST" id="signup-form" className="signup-form" onSubmit={enviarDatos}>
                                <h2 className="form-title">Registrate</h2>
                                <div className="form-group">
                                    <input type="text" className="form-input" name="name" id="name" placeholder="Your Name" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-input" name="email" id="email" placeholder="Your Email" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-input" name="password" id="password" placeholder="Password" onChange={handleInputChange} />
                                    <span toggle="#text" className="zmdi zmdi-eye field-icon toggle-password"></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" data-validate="agree-term is required" />
                                    <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <p>Terms of service</p></label>
                                </div>{/*<a href="" className="term-service"*/} 
                                <div className="form-group">
                                    <input type="submit" name="submit" id="submit" className="form-submit" value="Sign up"/>
                                </div>
                            </form>
                            <p className="loginhere">
                                Have already an account ? <a href="login" className="loginhere-link">Login here</a>
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            {/* JS */}
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="js/main.js"></script>
        </body>
        </div>
    )}
    export default Registro;