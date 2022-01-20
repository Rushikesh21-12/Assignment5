const initialState = false

export default function loadingReducer(state = initialState, action){
    switch(action.type){
        case 'GET_USER':
            return true
        case 'SET_USER':
            return false
        case 'GET_USER_POSTS':
            return true
        case 'SET_USER_POSTS':
            return false
        case 'GET_POST_COMMENT':
            return true
        case 'SET_POST_COMMENT':
            return false
        
        default:
            return state
    }
}