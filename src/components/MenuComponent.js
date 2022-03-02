import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem ({paleta}) {
    return(
        <Card>
            <Link to={`/menu/${paleta.id}`}>
                <CardImg width="300px" height="300px" src={baseUrl + paleta.image} alt={paleta.name} />
                <CardImgOverlay>  
                    <CardTitle>{paleta.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.paletas.paletas.map(paleta =>{
        return(
            <div key={paleta.id} className="col-12 col-md-5 m-1">   
                <RenderMenuItem paleta={paleta} onClick={props.onClick} />
            </div>
        );
    })

    if(props.paletas.isLoading) {
        return(
            <div className="container">
                <div classname="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errMess) {
        return(
            <div className="container">
                <div classname="row">
                   <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );    
    }
}
export default Menu;