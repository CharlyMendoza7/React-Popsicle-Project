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
import { addComment, fetchComments, fetchPaletas, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

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
  fetchPaletas: () => {dispatch(fetchPaletas())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
})


class Main extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPaletas();
    this.props.fetchComments();
    this.props.fetchPromos();
  }


  render() {

    const PaletaWithId = ({match}) => {
      return(
        <PaletaDetail paleta={this.props.paletas.paletas.filter(paleta => paleta.id === parseInt(match.params.paletaId,10))[0]}
        isLoading={this.props.paletas.isLoading}
        errMess={this.props.paletas.errMess}
        comments={this.props.comments.comments.filter(comment => comment.paletaId === parseInt(match.params.paletaId,10))}
        commentsErrMess={this.props.comments.errMess}
        addComment={this.props.addComment} />
      );
    }

    const HomePage = () => {
      return(
        <Home paleta={this.props.paletas.paletas.filter(paleta => paleta.featured)[0]}
          paletasLoading={this.props.paletas.isLoading}
          paletasErrMess={this.props.paletas.errMess}
          promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
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
          <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));