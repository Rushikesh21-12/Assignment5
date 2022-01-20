import { all, takeLatest, fork } from "redux-saga/effects";
import { handleAddComment } from "./handlers/addComment";
import { handleGetComment } from "./handlers/postComments";
import { handleGetUserPost } from "./handlers/userPost";
import { handleGetUser } from "./handlers/users";

function* getUserSaga() {
    yield takeLatest('GET_USER', handleGetUser)
}

function* getPostSaga() {
    yield takeLatest('GET_USER_POSTS', handleGetUserPost)
}

function* getCommentSaga() {
    yield takeLatest('GET_POST_COMMENT', handleGetComment)
}

function* addCommentSaga() {
    yield takeLatest('ADD_COMMENT', handleAddComment)
}
export default function* watcherSaga() {
    yield all([
        fork(getUserSaga),
        fork(getPostSaga),
        fork(getCommentSaga),
        fork(addCommentSaga)
    ])
}