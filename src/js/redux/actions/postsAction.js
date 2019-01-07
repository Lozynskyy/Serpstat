import { GET_POSTS, GET_POSTS_SUCCESS, FIND_POSTS, SORT_POSTS} from './../constants/posts.js'

export function getPostsAction(){
    return {
        type: GET_POSTS
    }
}

export function getPostsSuccessAction(payload){
    return {
        type: GET_POSTS_SUCCESS,
        payload
    }
}

export function findPostsAction(payload) {
    return {
        type: FIND_POSTS,
        payload
    }
}

export function sortPostsAction(payload) {
    return {
        type: SORT_POSTS,
        payload
    }
}