import { React, Component } from 'react';
import Menu from './MenuComponent';
import PaletaDetail from './PaletaDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    paletas: state.paletas,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class Main extends Component {

  constructor(props) {
    super(props);

  }


  render() {

    const PaletaWithId = ({match}) => {
      return(
        <PaletaDetail paleta={this.props.paletas.filter(paleta => paleta.id === parseInt(match.params.paletaId,10))[0]}
        comments={this.props.comments.filter(comment => comment.paletaId === parseInt(match.params.paletaId,10))} />
      );
    }

    const HomePage = () => {
      return(
        <Home paleta={this.props.paletas.filter(paleta => paleta.featured)[0]}
          promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
        />
      );
    }
    return(
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu paletas={this.props.paletas} />} />
          <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
          <Route path='/menu/:paletaId' component={PaletaWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));