import React, {Component} from 'react'
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'


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

function RenderComments({comments}){
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
    
    if(props.paleta != null){

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderPaleta paleta={props.paleta} />
                    </div>
                    
                    <div className="col-12 col-md-5 m-1">
                       <RenderComments comments={props.paleta.comments} />
                    </div>
                    
                </div>
            </div>
        );
    }
    else {
        return(
            <div>
                {console.log(props)}
            </div>
        );
    }    
    
}

export default PaletaDetail;