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
import { addComment, fetchPaletas } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    paletas: state.paletas,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (paletaId, rating, author, comment) => dispatch(addComment(paletaId, rating, author, comment)),
  fetchPaletas: () => {dispatch(fetchPaletas())}
})


class Main extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPaletas();
  }


  render() {

    const PaletaWithId = ({match}) => {
      return(
        <PaletaDetail paleta={this.props.paletas.paletas.filter(paleta => paleta.id === parseInt(match.params.paletaId,10))[0]}
        isLoading={this.props.paletas.isLoading}
        errMess={this.props.paletas.errMess}
        comments={this.props.comments.filter(comment => comment.paletaId === parseInt(match.params.paletaId,10))}
        addComment={this.props.addComment} />
      );
    }

    const HomePage = () => {
      return(
        <Home paleta={this.props.paletas.paletas.filter(paleta => paleta.featured)[0]}
          paletasLoading={this.props.paletas.isLoading}
          paletasErrMess={this.props.paletas.errMess}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));