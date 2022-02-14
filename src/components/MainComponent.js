import { React, Component } from 'react';
import Menu from './MenuComponent';
import { PALETAS } from '../shared/paletas';
import PaletaDetail from './PaletaDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paletas: PALETAS
    };
  }



  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }
    return(
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu paletas={this.state.paletas} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;