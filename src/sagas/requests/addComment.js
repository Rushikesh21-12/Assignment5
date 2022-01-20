import { create } from "apisauce";

export default async function requestAddComment(id, postId, name, email, body){
    console.log(id, postId, name, email, body)
    const api = create({
        baseURL: 'https://gorest.co.in/public/v1',
        headers: {
            'Content-type': 'application/json', 
            'Accept':'application/json', 
            'Authorization': 'Bearer 6ff57e6927d95281752660f8e6288704ba49be2102b24709f8fbfc44a3806653'
        }
    })

    await api.post(`/posts/${postId}/comments`, 
    {
        id: id,
        postId: postId,
        name: name,
        email: email,
        body: body
    }
    ).then(response => {
        if(response.ok){
            console.log('added')
        }else{
            console.log(response)
        }               
    })
}