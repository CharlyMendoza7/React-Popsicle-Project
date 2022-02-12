import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function RenderMenuItem ({paleta, onClick}) {
    return(
        <Card onClick={() => onClick(paleta.id)}>
            <CardImg width="100%" src={paleta.image} alt={paleta.name} />
            <CardImgOverlay>  
                 <CardTitle>{paleta.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.paletas.map(paleta =>{
        return(
            <div key={paleta.id} className="col-12 col-md-5 m-1">   
                <RenderMenuItem paleta={paleta} onClick={props.onClick} />
            </div>
        );
    })

    return(
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
    

}
export default Menu;