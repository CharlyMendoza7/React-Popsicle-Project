import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import './App.css';
import { PALETAS } from './shared/paletas';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paletas: PALETAS
    };
  }

  render() {
    return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Pauletta</NavbarBrand>
          </div>
        </Navbar>
        <Menu paletas={this.state.paletas}/>
      </div>
    );
  }
}

export default App;
