import { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Pauletta</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
