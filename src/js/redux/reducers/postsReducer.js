import { GET_POSTS, GET_POSTS_SUCCESS} from './../constants/posts.js'

let initState = {
    data: [],
    loading: false
}

export default function postsReducer(state = initState, action){
    switch(action.type){
        case GET_POSTS: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_POSTS_SUCCESS: {
            return{
                ...state,
                data: action.payload,
                loading: false
            }
        }
    }
    return state;
}