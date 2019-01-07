import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

@connect(
    (state, props) => {
        return state.posts.data.find(post => post.id === props.id)
    }
)


class PostsListItem extends Component {
    constructor() {
        super();
        }

    render() {
        return (
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h2>
                                <Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
                            </h2>
                        </CardTitle>
                        <CardText>{this.props.body}</CardText>
                        <p>Views: {this.props.views}</p>
                        <Link to={`/post/${this.props.id}`}>
                            <Button>Read more &#8594;</Button>
                        </Link>
                    </CardBody>
                </Card>
        )
    }
}

export default PostsListItem;