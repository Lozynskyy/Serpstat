import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { getVideosEffect } from '../redux/effects/postsEffect.js';
import { Link } from 'react-router-dom';
import {getPostsEffect, findPostsEffect, sortPostsEffect} from "../redux/effects/postsEffect";
import PostsListItem from './PostsListItem';

@connect(
    state => ({

            postsLoading: state.posts.loading,
            postsData: state.posts.data.filter(post => post.title.includes(state.findPosts)).sort(function compareNumbers(a, b) {
                if(state.sortType === 1)
                    return a.views - b.views;
                else if(state.sortType === 2)
                    return b.views - a.views;
            })

    })
)

class PostsList extends Component {
    constructor() {
        super();
    }

    findPost(){
        console.log("findPost", this.searchInput.value);
        this.props.dispatch(findPostsEffect(this.searchInput.value));
    }

    sortPostsUp(){
        console.log("Up sort clicked!");
        this.props.dispatch(sortPostsEffect(1));
    }

    sortPostsDown(){
        console.log("Down sort clicked!");
        this.props.dispatch(sortPostsEffect(2));
    }

    componentWillMount() {
        this.props.dispatch(getPostsEffect());
    }

    render() {

        return (
            <div>

                {
                    this.props.postsLoading && <p>loading...</p>
                }

                <div>
                    <input type="text" ref={(input) => {this.searchInput = input}}/>
                    <button onClick={this.findPost.bind(this)}>Find post</button>
                    <button onClick={this.sortPostsUp.bind(this)}>Sort by views &uarr;</button>
                    <button onClick={this.sortPostsDown.bind(this)}>Sort by views &darr;</button>
                </div>

                {this.props.postsData.map((post) => {
                    return (
                        <div>
                            <PostsListItem key={post.id} id={post.id} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default PostsList;