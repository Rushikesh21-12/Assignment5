const initialState = 0

export default function idReducer(state = initialState, action){

    switch(action.type){
        case 'SET_ID':
            return action.payload

        default:
            return state
    }

}