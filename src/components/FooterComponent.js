import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            Diego Rivera, Chapalita Inn<br />
                            Av Guadalupe 6601<br />
                            Zapopan, Jalisco<br />
                            <i className="fa fa-phone fa-lg"></i>: +52 33 1009 4945<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:paulettagdl@gmail.com">
                                paulettagdl@gmail.com
                            </a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/Pauletta.gdl"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:paulettagdl@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2020 Pauletta</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;