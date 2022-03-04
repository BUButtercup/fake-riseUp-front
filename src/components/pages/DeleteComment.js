import {React, useState} from 'react';

const DeleteComment = () => {
    const [commentIdD, setCommentIdD] = useState(null);
    const [oneCommentD, setOneCommentD] = useState(null);

    const handleCommentIdD = e => {
        e.preventDefault();
        setCommentIdD(e.target.value);
    };

    const handleCommentDeleteSubmit = async e => {
        e.preventDefault();
        try{
        const responseCD = await fetch(`http://localhost:3005/comments/${commentIdD}`, {
            method: 'DELETE',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const responseDataCD = await responseCD.json()
        console.log(' comment result',responseDataCD)
        if(responseCD.ok){
            setOneCommentD(responseDataCD);
            console.log('============oneCommentD', responseDataCD)
        } else {alert('You are not authorized to do that!')}
        } catch (err) {
          console.log('There was a problem: ', err)
          alert({message: 'there was an error: ', err})
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <form>
                <p>this will test the following DELETE route:</p><br/>
                <code>localhost:3005/comments/:commentId</code><br/>
                <label htmlFor="commentIdD">Enter a comment id:</label>
                <input
                onChange={handleCommentIdD}
                value={commentIdD}
                name="commentIdD"
                type="number"
                className="form-control"
                id="commentIdD"
                />
                <button onClick={handleCommentDeleteSubmit}
                    className="btn btn-secondary"
                    type="submit">Delete Comment</button>
            </form>
            <ul className="list-group">

                {oneCommentD ? (<li className="list-group-item" key={oneCommentD.id}><p>Comment #{oneCommentD.id} deleted.</p></li>) : null}
            </ul>
        </div>
    )
}

export default DeleteComment;