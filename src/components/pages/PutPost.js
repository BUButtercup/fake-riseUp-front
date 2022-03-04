import {React, useState} from 'react';

const PutPost = () => {

    const [postIdE, setPostIdE] = useState('')
    const [topicE, setTopicE] = useState('')
    const [titleE, setTitleE] = useState('')
    const [bodyE, setBodyE] = useState('')
    
    const handlePostIdE = e => {
        e.preventDefault();
        setPostIdE(e.target.value)
    }
    const handleTopicE = e => {
        e.preventDefault();
        setTopicE(e.target.value)
    }
    const handleTitleE = e => {
        e.preventDefault();
        setTitleE(e.target.value)
    }
    const handleBodyE = e => {
        e.preventDefault();
        setBodyE(e.target.value)
    }

    const handlePutPost = async e => {
        e.prevent.default();
        try{
                const resultEP = await fetch(`http://localhost:3005/posts/${postIdE}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    topicE,
                    titleE,
                    bodyE
                    }),
                })
                console.log('==========PUT post result',resultEP)
                if(!resultEP.ok){
                    alert('There was a problem, post was not edited!')
                } else {
                    const editedPost = await resultEP.json();
                    console.log('yay, you edited the post!!!!!!!!!', editedPost)
                    alert(`Post #${postIdE} Edited!`)
                }
        } catch (err) {
            console.log('There was a problem: ', err)
            alert({message: 'there was an error: ', err})
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <form>
            <p>this will test the following PUT route:</p><br/>
            <code>localhost:3005/posts/:id</code><br/>

            <label htmlFor="postIdE">Enter a post id to edit:</label>
            <input
            onChange={handlePostIdE}
            value={postIdE}
            name="postIdE"
            type="number"
            className="form-control"
            id="postIdE"
            />

            <label htmlFor="topicE">Enter a topic:</label>
            <input
            onChange={handleTopicE}
            value={topicE}
            name="topicE"
            type="text"
            className="form-control"
            placeholder="Type topic here"
            id="topicE"
            />

            <label htmlFor="titleE">Enter a title:</label>
            <input
            onChange={handleTitleE}
            value={titleE}
            name="titleE"
            type="text"
            className="form-control"
            placeholder="Type post's title here"
            id="titleE"
            />
            
            <label htmlFor="bodyE">Type Body:</label>
            <input
            onChange={handleBodyE}
            value={bodyE}
            name="bodyE"
            type="text"
            className="form-control"
            placeholder="Type your post here"
            id="bodyE"
            />

            <button onClick={handlePutPost}
            className="btn btn-secondary"
            type="submit">Edit Post</button>
            </form>
        </div>
    )
}

export default PutPost;