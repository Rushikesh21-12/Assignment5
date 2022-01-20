const initialState= []

export default function commentsReducer(state = initialState, action){

    switch(action.type){
        case 'SET_POST_COMMENT':
            return action.payload

        default:
            return state
    }

}