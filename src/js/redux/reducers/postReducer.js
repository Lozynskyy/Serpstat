import { GET_POST, GET_POST_SUCCESS} from './../constants/post.js'

let initState = {
    data: [],
    loading: false
}

export default function postReducer(state = initState, action){
    switch(action.type){
        case GET_POST: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_POST_SUCCESS: {
            return{
                ...state,
                data: action.payload,
                loading: false
            }
        }
    }
    return state;
}