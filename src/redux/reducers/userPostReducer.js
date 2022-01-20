const initialState= []

export default function userPostReducer(state = initialState, action){

    switch(action.type){
        case 'SET_USER_POSTS':
            return action.payload

        default:
            return state
    }

}