import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-5 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                    Diego Rivera, Chapalita Inn<br />
                    Av Guadalupe 6601<br />
                    Zapopan, Jalisco<br />
                    <i className="fa fa-phone"></i>: +52 33 1009 4945<br />
                    <i className="fa fa-envelope"></i>: <a href="mailto:paulettagdl@gmail.com">paulettagdl@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6">
                    <h5>Map of our Loaction</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+523310094945"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-success" href="mailto:paulettagdl@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;