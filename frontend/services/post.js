const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createPost = async (content, image, token)=> {

    let myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    
    let formdata = new FormData(); 
    formdata.append("content", content);
    if (image) formdata.append("image", image);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    
    return await fetch(API_URL + "/post/create", requestOptions).then(response => response.json())
}

export const getPost = async (token, page)=> {
    let myHeaders = new Headers();
    myHeaders.append("auth-token", token);

    let requestOptions = {
        headers: myHeaders
    };
    
    return await fetch(API_URL + "/post/get/" + page, requestOptions).then(response => response.json())
}

export const likePost = async (postId, token) => {
    let myHeaders = new Headers();
    myHeaders.append("auth-token", token);
    myHeaders.append("content-type", "application/json")

    let options = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            postId
        })
    };
    
    return await fetch(API_URL + '/post/like', options).then(response => response.json())
}
