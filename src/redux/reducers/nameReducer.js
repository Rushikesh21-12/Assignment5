const initialState = ''

export default function nameReducer(state = initialState, action){
    switch(action.type){
        case 'SET_NAME':
            return action.payload

        default:
            return state
    }
}