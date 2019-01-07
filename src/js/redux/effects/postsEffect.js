import API from './../../api.js'
import * as Actions from './../actions/postsAction.js'

export function getPostsEffect(){
    return dispatch => {
        dispatch(Actions.getPostsAction());

        API.getPosts()
            .then( posts => posts.map(post => {
                let min=0;
                let max=200;
                let random =Math.floor(Math.random() * (+max - +min)) + +min;
                post.views = random;
                return post;
            }) )
            .then( posts => {
                dispatch(Actions.getPostsSuccessAction(posts));
            });
    };
}

export function findPostsEffect(name){
    console.log('name', name);
    return dispatch => {
        dispatch(Actions.findPostsAction(name));
    }
}

export function sortPostsEffect(type){
    console.log('Sort type', type);
    return dispatch => {
        dispatch(Actions.sortPostsAction(type));
    }
}