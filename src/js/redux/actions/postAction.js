import { GET_POST, GET_POST_SUCCESS} from './../constants/post.js'

export function getPostAction(){
    return {
        type: GET_POST
    }
}

export function getPostSuccessAction(payload){
    return {
        type: GET_POST_SUCCESS,
        payload
    }
}