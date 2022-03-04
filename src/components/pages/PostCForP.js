import {React, useState} from 'react';

const PostCForP = () => {

    const [errorMessagesNC, setErrorMessagesNC] = useState({});
    const [postIdNC, setPostIdNC] = useState('')
    const [bodyNC, setBodyNC] = useState('')

    const errorsNC = {
        postIdNC: "Post ID is required",
        bodyNC: "please write something in your comment"
    }

    const renderErrorMessageNC = (name) => {
        name===errorMessagesNC.name && (
          <div className="error">{errorMessagesNC.message}</div>
        )
      }
    
      const handlePostIdNC = e => {
          e.preventDefault();
          setPostIdNC(e.target.value)
      }
      const handleBodyNC = e => {
          e.preventDefault();
          setBodyNC(e.target.value)
      }

      const handlePostNC = async e => {
        e.prevent.default();
        try{
            if (!postIdNC){
                setErrorMessagesNC({ name: "postIdNC", message: errorsNC.postIdNC });
              } else if (!bodyNC){
                setErrorMessagesNC({ name: "bodyNC", message: errorsNC.bodyNC });
              } else {
              const resultNC = await fetch(`http://localhost:3005/posts/${postIdNC}/comments/new`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    body: bodyNC
                 }),
              })
              console.log('==========POST comment result',resultNC)
              if(resultNC.ok){
                const newComment = await resultNC.json();
                console.log('yay, you created a comment!!!!!!!!!', newComment)
                alert('New Comment Created!')
              } else {alert('There was a problem, no new comment was made!')}
            } 
        } catch (err) {
            console.log('There was a problem: ', err)
            alert({message: 'there was an error: ', err})
        }
      }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <form>
            <p>this will test the following POST route:</p><br/>
            <code>localhost:3005/posts/:postId/comments/new</code><br/>

            <label htmlFor="postIdNC">Enter a post id:</label>
            <input
            onChange={handlePostIdNC}
            value={postIdNC}
            name="postIdNC"
            type="number"
            className="form-control"
            id="postIdNC"
            />
            {renderErrorMessageNC("postIdNC")}

            <label htmlFor="bodyNC">Enter the comment:</label>
            <input
            onChange={handleBodyNC}
            value={bodyNC}
            name="bodyNC"
            type="text"
            className="form-control"
            placeholder="Type comment here"
            id="bodyNC"
            />
            {renderErrorMessageNC("bodyNC")}

            <button onClick={handlePostNC}
            className="btn btn-secondary"
            type="submit">Create Comment</button>
            </form>
        </div>
    )
}

export default PostCForP;