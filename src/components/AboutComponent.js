import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({leader}) {
    return(
        <Media tag="li">
            <Media>
                <Media object width="80px" height="85px" src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    );
}

function About(props) {
    const leaders = props.leaders.map( leader => {
        return (
            <div>
                <RenderLeader leader={leader} />
            </div>
        );
    });

   return(
       <div className="container">
           <div className="row">
               <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                   <h3>About Us</h3>
                   <hr />
               </div>
           </div>
           <div className="row row-content">
               <div className="col-12 col-md-6">
                   <h2>Our History</h2>
                   <p>Started in 2020, Pauletta established itself as a gourmet popsicle food store in Guadalajara. With its unique recipes and unique flavors that can not be found anywhere else, it takes inspiration from Italian Gelattos and Mexican products and desserts</p>
                   <p>A successful chain started by our CEO, Carlos Mendoza, and his brother, Harry Mendoza, they started selling products in their own colony, now the also sell wholesale products.</p>
                   <p>Our chef is our CEO's mother, Bertha Robles, who has te practice and experience of working in a popsicle shop and also has the experience of being cooking all her life. With this, Pauletta has the insurance that the taste of our popsicles will be unique and delicious.</p>
               </div>
               <div className="col-12 col-md-5">
                   <Card>
                       <CardHeader className="bg-primary text-white">Frequently Asked Questions</CardHeader>
                       <CardBody>
                           <dl className="row p-1 ">
                               <dt className="col-6">Location?</dt>
                               <dd className="col-6">Av. Guadalupe 6601</dd>
                               <dt className="col-6">Shipping price?</dt>
                               <dd className="col-6">Depends on your location</dd>
                               <dt className="col-6">Prices?</dt>
                               <dd className="col-6">Check out our prices in our Menu!</dd>
                               <dt className="col-6">Wholesale?</dt>
                               <dd className="col-6">Contact us and we'll give you further information</dd>
                           </dl>
                       </CardBody>
                   </Card>
               </div>
               <div className="col-12">
                   <Card>
                       <CardBody className="bg-faded">
                           <blockquote className="blockquote">
                               <p className="mb-0">Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success</p>
                               <footer className="blockquote-footer">Robert Kiyosaki,
                               <cite title="Source Title"> Rich Dad, Poor Dad, 1997</cite> 
                               </footer>
                           </blockquote>
                       </CardBody>
                   </Card>
               </div>
               <div className="row row-content-about">
                   <div className="col-12">
                       <h2>Corporate Leadership</h2>
                   </div>
               </div>
               <div className="col-12">
                   <Media list>
                       {leaders}
                   </Media>
               </div>
           </div>
       </div>
   );
}

export default About;