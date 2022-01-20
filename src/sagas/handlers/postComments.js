import { call, put, select } from "redux-saga/effects";
import { setComment } from "../../redux/actions";
import requestGetComments from "../requests/postComments";

const getId = state => state.postIdReducer

export function* handleGetComment(){
    try{
        const postId = yield select(getId)
        const comments = yield call(requestGetComments, postId)
        yield put(setComment(comments))
    }catch (error){
        console.log(error)
    }
}
