import {React, useState} from 'react';


const GetOneUser = () => {
    const [uid, setUID] = useState('');
    const [oneUser, setOneUser] = useState({});

    const handleUID = e => {
        e.preventDefault();
        setUID(e.target.value);
    };

    const handleUIDSubmit = async e => {
        e.preventDefault();
        try{
        const response = await fetch(`http://localhost:3005/users/${uid}`, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const responseData = await response.json()
        console.log('result',responseData)
        if(response.ok){
            setOneUser(responseData);
            console.log('============oneUser', responseData)
            // console.log('=============group',group)
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
                <code>localhost:3005/users/:id</code><br/>
                <label htmlFor="whichUser">Enter a user id:</label>
                    <input
                    onChange={handleUID}
                    value={uid}
                    name="whichUser"
                    type="text"
                    className="form-control"
                    placeholder="Type user's ID here"
                    id="whichUser"
                    />
                <button onClick={handleUIDSubmit}
                    className="btn btn-secondary"
                    type="submit">Get One User</button>
            </form>
            <p style={{margin: "10px"}}>If you'd like to try the seeded users, their IDs are below.<br/>Admin is the only one that should be able to access all users</p>
            <ul>
                <li>
                    <strong>Look up IDs in db table for seeded user IDs, I think they change each time we seed!</strong>
                </li>
            </ul>
            <ul className="list-group">

                {oneUser ? (<li className="list-group-item" key={oneUser.id}>{oneUser.username}: {oneUser.role}</li>) : null}
            </ul>
        </div>
    )
}

export default GetOneUser;
