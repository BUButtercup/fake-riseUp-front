import {React, useState, useEffect} from 'react';

const GetAllPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3005/posts/',{
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        .then(response => response.json())
        .then(responseJson => {
        console.log('=================postData', responseJson)
          setPosts(responseJson)
        }).catch(err=>{
            console.log(err)
            alert(`There was an error: ${err}`)
        })
      }, []);

    // const getPosts = async () => {
    // try{
    //     const result = await fetch('http://localhost:3005/posts/',{
    //         method: 'GET',
    //         headers: {
    //             'x-access-token': localStorage.getItem('token'),
    //         },
       
            
    //     })
    //     if(result.ok){
    //         console.log('data recieved!!')
    //         console.log(result.json())
    //     console.log('result',resultData)
    //         setPosts(resultData)
    //         console.log('============postGroup', resultData)
    //     } else {alert('You are not authorized to see that!')}
    // })
    // } catch (err) {
    //     console.log('There was a problem: ', err)
    //     alert({message: 'there was an error: ', err})
    // }
    

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <h1>Posts:</h1>
            <p>this will test the following GET route:</p><br/>
            <code>localhost:3005/posts</code><br/>
            {posts ? (posts.map(p=>{
                return(
                <li className='list-group-item' style={{width: "40vw"}} key={p.id}><h1>{p.title}</h1><p>{p.topic}</p><p>{p.body}</p><p>User: {p.userId}</p></li>
                )
            })) : <li>No posts to display!</li>}
        </div>
    )
}

export default GetAllPosts;