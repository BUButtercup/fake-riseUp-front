import {React, useState, useEffect} from 'react';

const GetAllComments = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        try{
            const resultAC = fetch('http://localhost:3005/comments/',{
                method: 'GET',
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            }).then(res=>res.json())
            .then(resJson=>{
            const resultDataAC = resJson
            console.log('all comments result',resultDataAC)
            if(resultAC.ok){
                setComments(resultDataAC)
                console.log('============Comments Array', resultDataAC)
            } else {alert('You are not authorized to see that!')}
            })
        } catch (err) {
            console.log('There was a problem: ', err)
            alert({message: 'there was an error: ', err})
        }
    }, []);
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <h1>Comments:</h1>
            <p>this will test the following GET route:</p><br/>
            <code>localhost:3005/comments</code><br/>
            {comments ? (comments.map(c=>{
                return(
                <li className='list-group-item' key={c.id}><p>{c.body}</p><p>User: {c.userId}</p></li>
                )
            })) : <li>No comments to display!</li>}
        </div>
    )
}

export default GetAllComments;