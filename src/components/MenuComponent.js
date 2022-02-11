import { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
        
    }


    render() {

        const menu = this.props.paletas.map(paleta =>{
            return(
                <div key={paleta.id} className="col-12 col-md-5 m-1">   
                    <Card onClick={() => this.props.onClick(paleta.id)}>
                        <CardImg width="100%" src={paleta.image} alt={paleta.name} />
                        <CardImgOverlay>
                            <CardTitle>{paleta.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
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
}

export default Menu;