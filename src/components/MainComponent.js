import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import PaletaDetail from './PaletaDetail';
import { PALETAS } from '../shared/paletas';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paletas: PALETAS,
      selectedPaleta: null
    };
  }

  onPaletaSelect(paletaId) {
    this.setState({
        selectedPaleta: paletaId
    });
  }


  render() {
    return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Pauletta</NavbarBrand>
          </div>
        </Navbar>
        <Menu paletas={this.state.paletas} onClick={(paletaId) => this.onPaletaSelect(paletaId)}/>
        <PaletaDetail paleta={this.state.paletas.filter(paleta => paleta.id === this.state.selectedPaleta)[0]} />
      </div>
    );
  }
}

export default Main;