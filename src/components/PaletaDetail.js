import { Component } from 'react'
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'

class PaletaDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderPaleta(paleta) {

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

    renderComments(comment){
        if(comment != null){

            const comm = this.props.paleta.comments.map(comment => {
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
                </div>
            );

        }
        else {
            return(
                <div />
            );
        }
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderPaleta(this.props.paleta)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.paleta)}
                    </div>
                </div>
            </div>
        );
    }
}

export default PaletaDetail;