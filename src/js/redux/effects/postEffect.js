import API from './../../api.js'
import * as Actions from './../actions/postAction.js'

export function getPostEffect(id){
    return dispatch => {
        dispatch(Actions.getPostAction());

        API.getPost(id)
            .then( post => {
                dispatch(Actions.getPostSuccessAction(post));
            });
    };
}