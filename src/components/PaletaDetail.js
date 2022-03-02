import {React, Component} from 'react'
import { Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleModal() { 
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.paletaId, values.rating, values.author, values.comment);
    }

    render() {
        return(
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-pencil fa-lg'></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor=".rating">Rating</Label>
                                    <Control.select model=".rating" name="rating"
                                        className='form-control'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>    
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor=".author">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className='form-control'
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors 
                                        className='text-danger'
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be 3 or more characters',
                                            maxLength: 'Must  be less than 15 characters'
                                        }} />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col>
                                    <Label htmlFor=".comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className='form-control' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

function RenderPaleta({paleta}) {
    if (paleta != null) {
        return(
            <Card>
                <CardImg width="100%" src={paleta.image} alt={paleta.name} />
                <CardBody>
                    <CardTitle>{paleta.name}</CardTitle>
                    <CardText>{paleta.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return(
            <div />
        );
    }
}

function RenderComments({comments, addComment, paletaId}){
    if(comments != null){

        const comm = comments.map(comment => {
            return(
                <div key={comment.id} className="list-unstyled">
                    <li className="mb-4">
                        {comment.comment}
                    </li>
                    <li className="mb-4">
                        --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </li>
                </div>
            );
        });

        return(
            <div>
                <h4>Comments</h4>
                {comm}
                <CommentForm paletaId={paletaId} addComment={addComment}/>
            </div>
        );

    }
    else {
        return(
            <div />
        );
    }
}

const PaletaDetail = (props) => {
    if(props.isLoading) {
        return(
            <div className="container">
                <div classname="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errMess) {
        return(
            <div className="container">
                <div classname="row">
                   <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    if(props.paleta != null){

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.paleta.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.paleta.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderPaleta paleta={props.paleta} />
                    </div>
                    
                    <div className="col-12 col-md-5 m-1">                       
                       <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        paletaId={props.paleta.id} />
                    </div>
                    
                </div>
            </div>
        );
    }
    else {
        return(
            <div>
            </div>
        );
    }    
    
}

export default PaletaDetail;