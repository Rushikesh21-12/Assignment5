const initialState = 0

export default function postIdReducer(state = initialState, action){

    switch(action.type){

        case 'SET_POST_ID':
            return action.payload

        default:
            return state
    }

}