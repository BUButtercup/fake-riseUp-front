import {React, useState} from 'react';

const PostNewUser = () => {

    // const [errorMessages, setErrorMessages] = useState({});
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [newUser, setNewUser] = useState({});
    

    // const errors = {
    //     firstName: "first name is required",
    //     lastName: "last name is required",
    //     username: "username is required",
    //     password: "password is required",
    //     role: "role is required",
    //     email: "email is required",
    //     birthday: "birthday is required",
    //     zipCode: "zip code is required"
    // }

    // const renderErrorMessage = (name) => {
    //     name===errorMessages.name && (
    //       <div className="error">{errorMessages.message}</div>
    //     )
    //   }
    
      const handleFN = e => {
          e.preventDefault();
          setFirstName(e.target.value)
      }
      const handleLN = e => {
          e.preventDefault();
          setLastName(e.target.value)
      }
      const handleUN = e => {
          e.preventDefault();
          setUsername(e.target.value)
      }
      const handlePW = e => {
          e.preventDefault();
          setPassword(e.target.value)
      }
      const handleR = e => {
          e.preventDefault();
          setRole(e.target.value)
      }
      const handleE = e => {
          e.preventDefault();
          setEmail(e.target.value)
      }
      const handleBD = e => {
          e.preventDefault();
          setBirthday(e.target.value)
      }
      const handleZC = e => {
          e.preventDefault();
          setZipCode(e.target.value)
      }

      const handlePostUser = async e => {
        // e.prevent.default();
        try{
            // if (!password){
            //     setErrorMessages({ name: "password", message: errors.password });
            //   } else if (!username){
            //     setErrorMessages({ name: "username", message: errors.username });
            //   } else if (!firstName){
            //     setErrorMessages({ name: "firstName", message: errors.firstName });
            //   } else if (!lastName){
            //     setErrorMessages({ name: "lastName", message: errors.lastName });
            //   } else if (!role){
            //     setErrorMessages({ name: "role", message: errors.role });
            //   } else if (!email){
            //     setErrorMessages({ name: "email", message: errors.email });
            //   } else if (!birthday){
            //     setErrorMessages({ name: "birthday", message: errors.birthday });
            //   } else if (!zipCode){
            //     setErrorMessages({ name: "zipCode", message: errors.zipCode });
            //   } else {
              console.log('============FN', firstName)
              console.log('============LN', lastName)
              console.log('============FN', firstName)
              console.log('============UN', username)
              console.log('============PW', password)
              console.log('============R', role)
              console.log('============Em', email)
              console.log('============BD', birthday)
              const resultN = await fetch('http://localhost:3005/users/new',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'x-access-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    username, 
                    password,
                    role,
                    email,
                    birthday,
                    zipCode
                 }),
              })
              console.log('==========POST user result',resultN)
              if(resultN.ok){
                const nUser = await resultN.json();
                setNewUser(nUser)
                console.log('yay, you creates a user!!!!!!!!!', nUser)
                localStorage.setItem('new user token', nUser.accessToken)
                alert('New User Created!')
    
              } else {alert('There was a problem, no new user was made!')}
            // } 
        } catch (err) {
            console.log('There was a problem: ', err)
            alert({message: 'there was an error: ', err})
        }
      }

    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",border: "1px solid black", width: "100%", padding:"15px"}}>
                <p>this will test the following POST route:</p><br/>
                <code>localhost:3005/users/new</code><br/>
                <label htmlFor="firstName">First Name:</label>
                <input
                onChange={handleFN}
                value={firstName}
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First Name"
                id="firstName"
                />
                {/* {renderErrorMessage("firstName")} */}

                <label htmlFor="lastName">Last Name:</label>
                <input
                onChange={handleLN}
                value={lastName}
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
                id="lastName"
                />
                {/* {renderErrorMessage("lastName")} */}

                <label htmlFor="username">Username:</label>
                <input
                onChange={handleUN}
                value={username}
                name="username"
                type="text"
                className="form-control"
                placeholder="Username"
                id="username"
                />
                {/* {renderErrorMessage("username")} */}

                <label htmlFor="password">Password:</label>
                <input
                onChange={handlePW}
                value={password}
                name="password"
                type="text"
                className="form-control"
                id="password"
                />
                {/* {renderErrorMessage("passwordf")} */}

                <label htmlFor="role">Role:</label>
                <select
                onChange={handleR}
                name="role"
                type="text"
                className="form-control"
                id="userName"
                >
                    <option style={{textAlign: "center"}} value={''}>--Select Role--</option>
                    <option value={'freeUser'}>Guest User</option>
                    <option value={'paidUser'}>Subscriber</option>
                    <option value={'mod'}>Moderator</option>
                    <option value={'admin'}>Admin</option>
                </select>
                {/* {renderErrorMessage("role")} */}

                <label htmlFor="email">Email:</label>
                <input
                onChange={handleE}
                value={email}
                name="email"
                type="text"
                className="form-control"
                placeholder="Email"
                id="Email"
                />
                {/* {renderErrorMessage("email")} */}

                <label htmlFor="birthday">Date of Birth:</label>
                <input
                onChange={handleBD}
                value={birthday}
                name="birthday"
                type="date"
                className="form-control"
                placeholder="Birthday"
                id="birthday"
                />
                {/* {renderErrorMessage("birthday")} */}

                <label htmlFor="zipCode">Zip Code:</label>
                <input
                onChange={handleZC}
                value={zipCode}
                name="zipCode"
                type="number"
                className="form-control"
                placeholder="Zip Code"
                id="zipCode"
                />
                {/* {renderErrorMessage("uname")} */}

                <button className="btn btn-secondary" type="submit" onSubmit={handlePostUser}>Post New User</button>
            </form>
            {newUser.username ? (<div><h1>{newUser.username}:</h1><p>new user created!</p></div>) : null}
        </div>
    )
}
export default PostNewUser;