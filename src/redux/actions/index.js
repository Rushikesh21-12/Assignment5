export const getUsers = () => {
    return{
        type: 'GET_USER'
    }
}

export const setUsers = users => {
    return{
        type: 'SET_USER',
        payload: users
    }
}

export const getUserPost = () => {
    return{
        type: 'GET_USER_POSTS',
    }
}

export const setUserPost = (posts) => {
    return{
        type: 'SET_USER_POSTS',
        payload: posts
    }
}

export const setId = (id) => {
    return{
        type: 'SET_ID',
        payload: id
    }
}

export const setPostId = (id) => {
    return{
        type: 'SET_POST_ID',
        payload: id
    }
}

export const getComments = () => {
    return{
        type: 'GET_POST_COMMENT',
    }
}
export const setComment = (comments) => {
    return{
        type: 'SET_POST_COMMENT',
        payload: comments
    }
}

export const addComment = () => {
    return{
        type: 'ADD_COMMENT',
    }
}

export const setName = (name) => {
    return{
        type: 'SET_NAME',
        payload: name
    }
}

export const setEmail = (email) => {
    return{
        type: 'SET_EMAIL',
        payload: email
    }
}
export const setBody = (body) => {
    return{
        type: 'SET_BODY',
        payload: body
    }
}