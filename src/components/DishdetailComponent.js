import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';



    function RenderDish({dish}) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {
        if (comments == null) {
            return <div></div>
        }
        const commentsConst = comments.map(comment => {
            return (
                <ul key={comment.id} className='list-unstyled'>
                    <li>
                        <p>{comment.comment}</p>
                    </li>
                    <li>
                        <p>-- {comment.author} ,
                        {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(comment.date))}
                        </p>
                    </li>
                </ul>
            )
        });
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                {commentsConst}
            </div>
        );
    }

    

    const DishDetail = (props) => {

        const dish = props.dish
        if (dish == null) {
            return <div></div>
        }else{
            return (
                <div className='container'>
                    <div className='row'>
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
                
            );
        }
        
    }


export default DishDetail;

