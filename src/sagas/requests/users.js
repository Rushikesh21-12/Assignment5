import { create } from "apisauce";

export default async function requestGetUsers(){
    let data = []

    const api = create({
        baseURL: 'https://gorest.co.in/public/v1',
        headers: {
            'Content-type': 'application/json', 
            'Accept':'application/json', 
            'Authorization': 'Bearer 6ff57e6927d95281752660f8e6288704ba49be2102b24709f8fbfc44a3806653'
        }
    })

    await api.get('/users').then(response => {
        if(response.ok)
            data = response.data.data           
    })

    if(data.length !== 0)
        return data 
}