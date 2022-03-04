import {React, useState} from 'react';

const PostNewPost = () => {

    const [errorMessagesP, setErrorMessagesP] = useState({});
    const [topic, setTopic] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const errorsP = {
        topic: "topic is required",
        title: "title is required",
        body: "please write something in your post",
    }

    const renderErrorMessageP = (name) => {
        name===errorMessagesP.name && (
          <div className="error">{errorMessagesP.message}</div>
        )
      }
    
      const handleTopic = e => {
          e.preventDefault();
          setTopic(e.target.value)
      }
      const handleTitle = e => {
          e.preventDefault();
          setTitle(e.target.value)
      }
      const handleBody = e => {
          e.preventDefault();
          setBody(e.target.value)
      }

      const handlePostPost = async e => {
        e.prevent.default();
        try{
            if (!topic){
                setErrorMessagesP({ name: "topic", message: errorsP.topic });
              } else if (!title){
                setErrorMessagesP({ name: "title", message: errorsP.title });
              } else if (!body){
                setErrorMessagesP({ name: "body", message: errorsP.body });
              } else {
              const resultNP = await fetch('http://localhost:3005/posts/new',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    topic,
                    title,
                    body
                 }),
              })
              console.log('==========POST post result',resultNP)
              if(resultNP.ok){
                const newPost = await resultNP.json();
                console.log('yay, you creates a post!!!!!!!!!', newPost)
                alert('New Post Created!')
              } else {alert('There was a problem, no new post was made!')}
            } 
        } catch (err) {
            console.log('There was a problem: ', err)
            alert({message: 'there was an error: ', err})
        }
      }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <form>
            <p style={{margin: "30px 0 0 0"}}>this will test the following POST route:</p><br/>
            <code>localhost:3005/posts/new</code><br/>

            <label htmlFor="postTopic">Enter a topic:</label>
            <input
            onChange={handleTopic}
            value={topic}
            name="postTopic"
            type="text"
            className="form-control"
            placeholder="Type topic here"
            id="postTopic"
            />
            {renderErrorMessageP("topic")}

            <label htmlFor="postTitle">Enter a title:</label>
            <input
            onChange={handleTitle}
            value={title}
            name="postTitle"
            type="text"
            className="form-control"
            placeholder="Type post's title here"
            id="postTitle"
            />
            {renderErrorMessageP("title")}
            
            <label htmlFor="postBody">Type Body:</label>
            <input
            onChange={handleBody}
            value={body}
            name="postBody"
            type="text"
            className="form-control"
            placeholder="Type your post here"
            id="postBody"
            />
            {renderErrorMessageP("body")}

            <button onClick={handlePostPost}
            className="btn btn-secondary"
            type="submit"
            style={{margin: "10px"}}>Create Post</button>
            </form>
        </div>
    )
}

export default PostNewPost;