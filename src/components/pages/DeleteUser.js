import {React, useState} from 'react';

const DeleteUser = () => {
    const [uidD, setUIDD] = useState('');
    const [oneUserD, setOneUserD] = useState({});

    const handleUIDD = e => {
        e.preventDefault();
        setUIDD(e.target.value);
    };

    const handleUIDSubmitD = async e => {
        e.preventDefault();
        try{
            const responseD = await fetch(`http://localhost:3005/users/${uidD}`, {
                method: 'DELETE',
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            })
            const responseDataD = await responseD.json()
            console.log('result',responseDataD)
            if(responseD.ok){
                setOneUserD(responseDataD);
                console.log('============oneUser', responseDataD)
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
                <code>localhost:3005/users/:id</code><br/>
                <label htmlFor="whichUser">Enter a user id:</label>
                    <input
                    onChange={handleUIDD}
                    value={uidD}
                    name="whichUser"
                    type="text"
                    className="form-control"
                    placeholder="Type user's ID here"
                    id="whichUser"
                    />
                <button onClick={handleUIDSubmitD}
                    className="btn btn-secondary"
                    type="submit">Get One User</button>
            </form>
            <ul className="list-group">

                {oneUserD ? (<li className="list-group-item" key={oneUserD.id}>{oneUserD.username}: {oneUserD.role} = DELETED </li>) : null}
            </ul>
        </div>
    )
}

export default DeleteUser;