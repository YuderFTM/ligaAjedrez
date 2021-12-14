import React from "react";
import phone from "../images/phone-call.png";
import email from "../images/email2.png";
import face from "../images/facebook.png";
import insta from "../images/instagram.png";
import whatsap from "../images/whatsapp.png";

import '../style/principal.css';
// import '../js/scripts1.js';

const Footer=()=> {
    return (
        <>
            <footer className="bg-blue">
                <div className="container">
                    <nav className="row foot" >
                  
                    <ul className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                        <li className="font-weight-bold mb-2 data" fontSize="80px">Datos de Contacto</li>
                    </ul>
                    
                    <ul className="col-12 col-md-1 list-unstyled">
                        <li className="font-weight-bold mb-2"><img className='mx-3' width='30px' src={phone} alt="" /></li>
                        <li className="font-weight-bold mb-2"><img className='mx-3' width='30px' src={phone} alt="" /></li>
                        <li className="font-weight-bold mb-2"><img className='mx-3' width='30px' src={email} alt="" /></li>

                    </ul>
                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-3"> 2222222</li>
                        <li className="font-weight-bold mb-3">33333333</li>
                        <li className="font-weight-bold mb-3">Ligainfantilajedrez@medellin.com</li>

                    </ul>
                    <ul className="col-12 col-md-1 list-unstyled">
                        <li className="font-weight-bold mb-2"><img className='mx-3' width='30px' src={face} alt="" /></li>
                        <li className="font-weight-bold mb-2"><img className='mx-3' width='30px' src={insta} alt="" /></li>
                        <li className="font-weight-bold mb-2"><img className='mx-3' width='30px' src={whatsap} alt="" /></li>

                    </ul>
                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-3">liga Infantil de Medellin Ajedrez</li>
                        <li className="font-weight-bold mb-3">@LigainfantilAjedrez</li>
                        <li className="font-weight-bold mb-3">3101111111</li>

                    </ul>
                    <div className="small text-center " margin='5px'>Copyright &copy; 2021 - Team 4</div>
                    </nav>
                </div>
            
            </footer>
        </>
    )}

    export default Footer;