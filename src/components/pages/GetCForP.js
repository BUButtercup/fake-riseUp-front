import {React, useState} from 'react';

const GetCForP = () => {

    const [postIdC, setPostIdC] = useState('');
    const [comments, setComments] = useState([]);

    const handlePostIdC = e => {
        e.preventDefault();
        setPostIdC(e.target.value)
    }

    const handleGetSomeComments = async e => {
        try{
            const resultSC = await fetch(`http://localhost:3005/posts/${postIdC}/comments`,{
                method: 'GET',
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            const resultDataSC = await resultSC.json()
            console.log('result',resultDataSC)
            if(resultSC.ok){
                setComments(resultDataSC)
                console.log('============commentsGroup', resultDataSC)
            } else {alert('You are not authorized to see that!')}
        } catch (err) {
            console.log('There was a problem: ', err)
            alert({message: 'there was an error: ', err})
        }
    }

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <h1>Comments:</h1>
            <p>this will test the following GET route:</p><br/>
            <code>localhost:3005/posts/:postId/comments</code><br/>

            <label htmlFor="postIdC">Enter a post id:</label>
            <input
            onChange={handlePostIdC}
            value={postIdC}
            name="postIdC"
            type="number"
            className="form-control"
            id="postIdC"
            />
            <button onClick={handleGetSomeComments}
            className="btn btn-secondary"
            type="submit">Get Post's Comments</button>

            {comments ? (comments.map(c=>{
                return(
                <li className='list-group-item' key={c.id}><p>{c.body}</p><p>User: {c.userId}</p></li>
                )
            })) : <li>No comments to display!</li>}
        </div>
    )
}

export default GetCForP;