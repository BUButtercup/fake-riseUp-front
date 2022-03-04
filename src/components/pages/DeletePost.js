import {React, useState} from 'react';

const DeletePost = () => {
    const [postIdD, setPostIdD] = useState('');
    const [onePostD, setOnePostD] = useState({});

    const handleDeleteId = e => {
        e.preventDefault();
        setPostIdD(e.target.value);
    };

    const handlePostIdDSubmit = async e => {
        e.preventDefault();
        try{
        const responsePD = await fetch(`http://localhost:3005/posts/${postIdD}`, {
            method: 'DELETE',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const responseDataPD = await responsePD.json()
        console.log('result',responseDataPD)
        if(responsePD.ok){
            setOnePostD(responseDataPD);
            console.log('============Deleted Post', responseDataPD)
            setOnePostD(responseDataPD)
            alert(`Post #${postIdD} deleted.`)
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
                <code>localhost:3005/posts/:id</code><br/>
                <label htmlFor="postIdD">Enter a post id:</label>
                <input
                onChange={handleDeleteId}
                value={postIdD}
                name="postIdD"
                type="text"
                className="form-control"
                placeholder="Type post's ID here"
                id="postIdD"
                />
                <button onClick={handlePostIdDSubmit}
                    className="btn btn-secondary"
                    type="submit">Get One Post</button>
            </form>
            <ul className="list-group">

                {onePostD ? (<li className="list-group-item" key={onePostD.id}><h1>Post # {onePostD.id} deleted.</h1></li>) : null}
            </ul>
        </div>
    )



}

export default DeletePost;