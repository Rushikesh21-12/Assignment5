const initialState = ''

export default function bodyReducer(state = initialState, action){
    switch(action.type){
        case 'SET_BODY':
            return action.payload

        default:
            return state
    }
}