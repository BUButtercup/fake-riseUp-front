import {React, useState} from 'react';

const GetOneComment = () => {
    const [commentId, setCommentId] = useState(null);
    const [oneComment, setOneComment] = useState(null);

    const handleCommentId = e => {
        e.preventDefault();
        setCommentId(e.target.value);
    };

    const handleCommentIdSubmit = async e => {
        e.preventDefault();
        try{
        const responseC = await fetch(`http://localhost:3005/comments/${commentId}`, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const responseDataC = await responseC.json()
        console.log(' comment result',responseDataC)
        if(responseC.ok){
            setOneComment(responseDataC);
            console.log('============oneComment', responseDataC)
        } else {alert('You are not authorized to see that!')}
        } catch (err) {
          console.log('There was a problem: ', err)
          alert({message: 'there was an error: ', err})
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <form>
                <p>this will test the following GET route:</p><br/>
                <code>localhost:3005/comments/:commentId</code><br/>
                <label htmlFor="commentId">Enter a comment id:</label>
                <input
                onChange={handleCommentId}
                value={commentId}
                name="commentId"
                type="number"
                className="form-control"
                id="commentId"
                />
                <button onClick={handleCommentIdSubmit}
                    className="btn btn-secondary"
                    type="submit">Get One Comment</button>
            </form>
            <ul className="list-group">

                {oneComment ? (<li className="list-group-item" key={oneComment.id}><p>{oneComment.body}</p><p>{oneComment.userId}</p></li>) : null}
            </ul>
        </div>
    )
}

export default GetOneComment;