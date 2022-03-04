import {React, useState} from 'react';

const PutComment = () => {

    const [commentIdE, setCommentIdE] = useState('')
    const [bodyEC, setBodyEC] = useState({})
    
      const handleCommentIdE = e => {
          e.preventDefault();
          setCommentIdE(e.target.value)
      }
      const handleBodyEC = e => {
          e.preventDefault();
          setBodyEC(e.target.value)
      }

      const handlePutEC = async e => {
        e.prevent.default();
        try{
              const resultEC = await fetch(`http://localhost:3005/comments/${commentIdE}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    body: bodyEC
                 }),
              })
              console.log('==========PUT comment result',resultEC)
              if(resultEC.ok){
                const editedComment = await resultEC.json();
                console.log('yay, you edited a comment!!!!!!!!!', editedComment)
                alert('Comment Edited!')
              } else {alert('There was a problem, the comment was not edited!')}
        } catch (err) {
            console.log('There was a problem: ', err)
            alert({message: 'there was an error: ', err})
        }
      }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <form>
            <p>this will test the following PUT route:</p><br/>
            <code>localhost:3005/comments/:commentId</code><br/>

            <label htmlFor="commentIdE">Enter a comment id:</label>
            <input
            onChange={handleCommentIdE}
            value={commentIdE}
            name="commentIdE"
            type="number"
            className="form-control"
            id="commentIdE"
            />

            <label htmlFor="bodyEC">Edit the comment:</label>
            <input
            onChange={handleBodyEC}
            value={bodyEC}
            name="bodyEC"
            type="text"
            className="form-control"
            placeholder="Type comment here"
            id="bodyEC"
            />

            <button onClick={handlePutEC}
            className="btn btn-secondary"
            type="submit">Edit Comment</button>
            </form>
        </div>
    )
}

export default PutComment;