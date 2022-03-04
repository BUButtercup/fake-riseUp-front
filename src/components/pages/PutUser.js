import {React, useState} from 'react';

const PutUser = () => {

    const [UIDE, setUIDE] = useState('')
    const [firstNameE, setFirstNameE] = useState('')
    const [lastNameE, setLastNameE] = useState('')
    const [usernameE, setUsernameE] = useState('')
    const [passwordE, setPasswordE] = useState('')
    const [roleE, setRoleE] = useState('')
    const [emailE, setEmailE] = useState('')
    const [birthdayE, setBirthdayE] = useState('')
    const [zipCodeE, setZipCodeE] = useState('')
    
      const handleUIDE = e => {
          e.preventDefault();
          setUIDE(e.target.value)
      }
      const handleFNE = e => {
          e.preventDefault();
          setFirstNameE(e.target.value)
      }
      const handleLNE = e => {
          e.preventDefault();
          setLastNameE(e.target.value)
      }
      const handleUNE = e => {
          e.preventDefault();
          setUsernameE(e.target.value)
      }
      const handlePWE = e => {
          e.preventDefault();
          setPasswordE(e.target.value)
      }
      const handleRE = e => {
          e.preventDefault();
          setRoleE(e.target.value)
      }
      const handleEE = e => {
          e.preventDefault();
          setEmailE(e.target.value)
      }
      const handleBDE = e => {
          e.preventDefault();
          setBirthdayE(e.target.value)
      }
      const handleZCE = e => {
          e.preventDefault();
          setZipCodeE(e.target.value)
      }

      const handlePutUser = async e => {
        e.prevent.default();
        try{
            const result = await fetch(`http://localhost:3005/users/${UIDE}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                firstNameE,
                lastNameE,
                usernameE, 
                passwordE,
                roleE,
                emailE,
                birthdayE,
                zipCodeE
                }),
            })
            console.log('==========POST user result',result)
            if(result.ok){
            const editedUser = await result.json();
            console.log('yay, you updated the user!!!!!!!!!', editedUser)
            localStorage.setItem('updated user token', editedUser.accessToken)
            alert('User Updated!')
            // setIsLoggedIn(true);
            // setUser(currUser);

            } else {alert('There was a problem, user wasn\'t updated!')}
        } catch (err) {
            console.log('There was a problem: ', err)
            alert({message: 'there was an error: ', err})
        }
      }

    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",border: "1px solid black", width: "40%"}}>

                <p>this will test the following PUT route:</p><br/>
                <code>localhost:3005/users/:id</code><br/>

                <label htmlFor="UIDE">Enter a user id to edit:</label>
                <input
                onChange={handleUIDE}
                value={UIDE}
                name="UIDE"
                type="number"
                className="form-control"
                id="UIDE"
                />

                <label htmlFor="firstNameE">First Name:</label>
                <input
                onChange={handleFNE}
                value={firstNameE}
                name="firstNameE"
                type="text"
                className="form-control"
                placeholder="First Name"
                id="firstNameE"
                />

                <label htmlFor="lastNameE">Last Name:</label>
                <input
                onChange={handleLNE}
                value={lastNameE}
                name="lastNameE"
                type="text"
                className="form-control"
                placeholder="Last Name"
                id="lastNameE"
                />

                <label htmlFor="usernameE">Username:</label>
                <input
                onChange={handleUNE}
                value={usernameE}
                name="usernameE"
                type="text"
                className="form-control"
                placeholder="Username"
                id="usernameE"
                />

                <label htmlFor="passwordE">Password:</label>
                <input
                onChange={handlePWE}
                value={passwordE}
                name="passwordE"
                type="text"
                className="form-control"
                id="passwordE"
                />

                <label htmlFor="roleE">Role:</label>
                <select
                onChange={handleRE}
                name="roleE"
                type="text"
                className="form-control"
                id="roleE"
                >
                    <option value={''}>--Select Role--</option>
                    <option value={roleE}>Guest User</option>
                    <option value={roleE}>Subscriber</option>
                    <option value={roleE}>Moderator</option>
                    <option value={roleE}>Admin</option>
                </select>

                <label htmlFor="emailE">Email:</label>
                <input
                onChange={handleEE}
                value={emailE}
                name="emailE"
                type="text"
                className="form-control"
                placeholder="Email"
                id="emailE"
                />

                <label htmlFor="birthdayE">Date of Birth:</label>
                <input
                onChange={handleBDE}
                value={birthdayE}
                name="birthdayE"
                type="date"
                className="form-control"
                placeholder="Birthday"
                id="birthdayE"
                />

                <label htmlFor="zipCodeE">Zip Code:</label>
                <input
                onChange={handleZCE}
                value={zipCodeE}
                name="zipCodeE"
                type="number"
                className="form-control"
                placeholder="Zip Code"
                id="zipCodeE"
                />

                <button className="btn btn-light" type="submit" onClick={handlePutUser}>Edit User</button>
            </form>
        </div>
    )
}

export default PutUser;