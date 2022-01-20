import { call, put, select } from "redux-saga/effects";
import { setUserPost } from "../../redux/actions";
import requestGetPosts from "../requests/userPost";

const getId = state => state.idReducer

export function* handleGetUserPost(){

    try{
        const id = yield select(getId)
        const posts = yield call(requestGetPosts, id)
        yield put(setUserPost(posts))
    }catch (error){
        console.log(error)
    }
}
