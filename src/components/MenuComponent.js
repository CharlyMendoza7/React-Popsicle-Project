import { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import PaletaDetail from './PaletaDetail';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPaleta: null
        };

        
    }

    onPaletaSelect(paleta) {
        this.setState({
            selectedPaleta: paleta
        });
    }

    render() {

        const menu = this.props.paletas.map(paleta =>{
            return(
                <div key={paleta.id} className="col-12 col-md-5 m-1">   
                    <Card onClick={() => this.onPaletaSelect(paleta)}>
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
                <PaletaDetail paleta={this.state.selectedPaleta}/>
            </div>
        );
    }
}

export default Menu;