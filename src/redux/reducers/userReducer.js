const initialState = []

export default function userReducer(state = initialState, action){
    switch(action.type){
        case 'SET_USER':
            let data = []
            for (let i = 0; i < action.payload.length; i++) {
                data.push([action.payload[i].id, action.payload[i].name])
            }
            return data

        default:
            return state
    }
}