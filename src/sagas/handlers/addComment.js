import { call, select } from "redux-saga/effects";
import requestAddComment from "../requests/addComment";

const getId = state => state.idReducer
const getPpostId = state => state.postIdReducer
const getName = state => state.nameReducer
const getEmail = state => state.emailReducer
const getBody = state => state.bodyReducer

export function* handleAddComment(){
    try{
        const id = yield select(getId)
        const postId = yield select(getPpostId)
        const name = yield select(getName)
        const email = yield select(getEmail)
        const body = yield select(getBody)

        yield call(requestAddComment, id, postId, name, email, body)
    }catch (error){
        console.log(error)
    }
}
