import {React, useState} from 'react';

const GetOnePost = () => {
    const [postId, setPostId] = useState('');
    const [onePost, setOnePost] = useState({});

    const handlePostId = e => {
        e.preventDefault();
        setPostId(e.target.value);
    };

    const handlePostIdSubmit = async e => {
        e.preventDefault();
        try{
        const responseP = await fetch(`http://localhost:3005/posts/${postId}`, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const responseDataP = await responseP.json()
        console.log('result',responseDataP)
        if(responseP.ok){
            setOnePost(responseDataP);
            console.log('============onePost', responseDataP)
        } else {alert('You are not authorized to see that!')}
        } catch (err) {
          console.log('There was a problem: ', err)
          alert({message: 'there was an error: ', err})
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <form>
                <p style={{margin: "30px 0 0 0"}}>this will test the following GET route:</p><br/>
                <code>localhost:3005/posts/:id</code><br/>
                <label htmlFor="whichPost">Enter a post id:</label>
                <input
                onChange={handlePostId}
                value={postId}
                name="whichPost"
                type="number"
                className="form-control"
                id="whichPost"
                />
                <button onClick={handlePostIdSubmit}
                    className="btn btn-secondary"
                    type="submit"
                    style={{margin: "10px"}}>Get One Post</button>
                <p><strong>If you would like to use seeded posts, their ID's are 1, 2, 3, 4, 5</strong></p>
            </form>
            <ul className="list-group">

                {onePost.title ? (<li className="list-group-item" style={{width: "40vw"}} key={onePost.id}><h1>{onePost.title}</h1><p>{onePost.topic}</p><p>{onePost.body}</p><p>{onePost.userId}</p></li>) : <li>No post to show!</li>}
            </ul>
        </div>
    )



}

export default GetOnePost;