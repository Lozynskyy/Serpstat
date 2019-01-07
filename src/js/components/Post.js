import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostEffect } from '../redux/effects/postEffect';
import {Button, Row} from "reactstrap";

@connect(
  state => {
    return {
      postLoading: state.post.loading,
      postData: state.post.data
    }
  }
)

class Post extends Component {

    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.dispatch(getPostEffect(id));
    }

    render() {

        return (
            <div>
                <h1>{this.props.postData.title}</h1>
                <p>{this.props.postData.body}</p>
                <Link to='/'><Button>&#8592; Back</Button></Link>
            </div>
        );
    }
}

export default Post;