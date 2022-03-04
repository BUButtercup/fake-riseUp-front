
import {useState} from 'react'
import GetOneUser from "./GetOneUser.js"
import PostNewUser from "./PostNewUser.js";
import PutUser from "./PutUser"
import DeleteUser from "./DeleteUser"
import GetAllPosts from "./GetAllPosts"
import GetOnePost from "./GetOnePost"
import PostNewPost from "./PostNewPost"
import PutPost from "./PutPost"
import DeletePost from "./DeletePost"
import GetCForP from "./GetCForP"
import PostCForP from "./PostCForP"
import GetAllComments from "./GetAllComments"
import GetOneComment from "./GetOneComment"
import PutComment from "./PutComment"
import DeleteComment from "./DeleteComment"


const Home = () => {
    // const [errorMessages, setErrorMessages] = useState(null);
    const [user, setUser] = useState({});
    const [group, setGroup] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');

    const [auth, setAuth] = useState(false);
    const [oneU, setOneU] = useState(false);
    const [newU, setNewU] = useState(false);
    const [editU, setEditU] = useState(false);
    const [deleteU, setDeleteU] = useState(false);

    const [allP, setAllP] = useState(false);
    const [oneP, setOneP] = useState(false);
    const [newP, setNewP] = useState(false);
    const [editP, setEditP] = useState(false);
    const [deleteP, setDeleteP] = useState(false);
    const [allC4P, setAllC4P] = useState(false);
    const [newC4P, setNewC4P] = useState(false);

    const [allC, setAllC] = useState(false);
    const [oneC, setOneC] = useState(false);
    const [editC, setEditC] = useState(false);
    const [deleteC, setDeleteC] = useState(false);

    const makeAllFalse = () => {
      setAuth(false);
      setOneU(false);
      setNewU(false);
      setEditU(false);
      setDeleteU(false);
      setAllP(false);
      setOneP(false);
      setNewP(false);
      setEditP(false);
      setDeleteP(false);
      setAllC4P(false);
      setNewC4P(false);
      setAllC(false);
      setOneC(false);
      setEditC(false);
      setDeleteC(false);
    }
  
  //   const errors = {
  //     uname: "username is required",
  //     password: "password is required"
  // }

    const handleUNameChange = (e) => {
      e.preventDefault();
      setUname(e.target.value);
    }

    const handlePassChange = (e) => {
      e.preventDefault();
      setPass(e.target.value)
    }

    const handleLogOut = e => {
      e.preventDefault();
      localStorage.removeItem('token')
      setIsLoggedIn(false);
      makeAllFalse();
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log('the button was clicked')
      console.log('==========uname', uname)
      console.log('==========password', pass)
      // const {uname, pass} = document.forms[0]
      try{
        if(uname && pass){
          const result = await fetch('http://localhost:3005/users/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: uname, password: pass}),
          })
          console.log('result',result)
          if(result.ok){
            const currUser = await result.json();
            console.log('yay, you\'re logged in!!!!!!!!', currUser)
            localStorage.setItem('token', currUser.accessToken)
            setIsLoggedIn(true);
            setUser(currUser);

          } else {alert('Your username/password combination was incorrect')}
        } else {
          alert('Fill out both username and password');
          return;
        }
        // else if (!pass){
        //   setErrorMessages({ name: "pass", message: errors.pass });
        // } else {
        //   setErrorMessages({ name: "uname", message: errors.uname });
        // }
      } catch (err) {
        console.log('There was a problem: ', err)
        alert({message: 'there was an error: ', err})
      }
    }

  const checkAuth = async e => {
    e.preventDefault();
    try{
        const result = await fetch('http://localhost:3005/users/',{
          method: 'GET',
          headers: {
              'x-access-token': localStorage.getItem('token'),
          },
        })
        const resultData = await result.json()
        console.log('result',resultData)
        if(result.ok){
          makeAllFalse();
          setAuth(true);
          setGroup(resultData);
          console.log('============userGroup', resultData)
          console.log('=============group',group)
        } else {alert('You are not authorized to see that!')}
    } catch (err) {
      console.log('There was a problem: ', err)
      alert({message: 'there was an error: ', err})
    }
  }
  
  const handleOneU = e => {
    e.preventDefault();
    makeAllFalse();
    setOneU(true);
  }

  const handleNewU = e =>{
      e.preventDefault()
      makeAllFalse();
      setNewU(true);
  }
  
  const handleEditU = e =>{
      e.preventDefault()
      makeAllFalse();
      setEditU(true);
  }
  
  const handleDeleteU = e =>{
      e.preventDefault()
      makeAllFalse();
      setDeleteU(true);
  }
  ///////////////posts
  const handleAllPosts = e =>{
      e.preventDefault()
      makeAllFalse();
      setAllP(true);
  }
  
  const handleOnePost = e =>{
      e.preventDefault()
      makeAllFalse();
      setOneP(true);
  }
  
  const handleNewPost = e =>{
      e.preventDefault()
      makeAllFalse();
      setNewP(true);
  }
  
  const handleEditPost = e =>{
      e.preventDefault()
      makeAllFalse();
      setEditP(true);
  }
  
  const handleDeletePost = e =>{
      e.preventDefault()
      makeAllFalse();
      setDeleteP(true);
  }
  
  const handleAllCommentsForPostID = e =>{
      e.preventDefault()
      makeAllFalse();
      setAllC4P(true);
  }
  
  const handleNewCommentForPostID = e =>{
      e.preventDefault()
      makeAllFalse();
      setNewC4P(true);
  }
  
  ////////////comments
  const handleAllComments = e =>{
      e.preventDefault()
      makeAllFalse();
      setAllC(true);
  }
  
  const handleOneComment = e =>{
      e.preventDefault()
      makeAllFalse();
      setOneC(true);
  }
  
  const handleEditComment = e =>{
      e.preventDefault()
      makeAllFalse();
      setEditC(true);
  }
  
  const handleDeleteComment = e =>{
      e.preventDefault()
      makeAllFalse();
      setDeleteC(true);
  }
  
  // const renderErrorMessage = (name) => {
  //     name===errorMessages[name] && (
  //       <div className="error">{errorMessages.message}</div>
  //     )
  //   }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
            <h1>Home page is here!</h1>
            <h2>Check out our routes after logging in!</h2>
            <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",border: "1px solid black", width: "40%"}}>
                <div className="form-group" style={{width: "90%", padding: "5%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <label htmlFor="userName">Username:</label>
                <input
                onChange={handleUNameChange}
                value={uname}
                name="userName"
                type="text"
                className="form-control"
                placeholder="Username"
                id="userName"
                />
                {/* {renderErrorMessage("uname")} */}

                <label htmlFor="password">Password:</label>
                <input
                onChange={handlePassChange}
                value={pass}
                name="password"
                type="password"
                className="form-control"
                id="password"
                />
                {/* {renderErrorMessage("pass")} */}

                <br />
                <button
                onClick={handleSubmit}
                className="btn btn-secondary"
                type="submit"
                >
                    Login
                </button>
                <p>...OR...</p>
                <button className="btn btn-secondary" onClick={handleNewU}>Create a New User</button>
            </div>
            </form>
      
        

     
      {isLoggedIn ? (<div style={{display: "flex", flexDirection: "column", alignItems: "center", }}>
        <button className="btn btn-danger" style={{margin:"20px 0 0 0"}} onClick={handleLogOut}>Log Out</button>
        <h1 style={{margin:"20px 0 0 0"}}>Yay you're logged in!!!!</h1>
        <h3 style={{margin:"0 0 20px 0"}}>The Project Routes are listed below for testing</h3>
        <div style={{display: "flex", alignItems: "flex-start"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "stretch", margin:"0 20px"}}>
            <h4 style={{textAlign: "center"}}>userRoutes.js</h4>
            <button className="btn btn-primary" onClick={checkAuth} style={{margin: "5px 0"}}>Get All Users</button>
            <button className="btn btn-primary" onClick={handleOneU} style={{margin: "5px 0"}}>Get User By ID</button>
            <button className="btn btn-primary" onClick={handleNewU} style={{margin: "5px 0"}}>Create a New User</button>
            <button className="btn btn-primary" onClick={handleEditU} style={{margin: "5px 0"}}>Edit User By ID</button>
            <button className="btn btn-primary" onClick={handleDeleteU} style={{margin: "5px 0"}}>Delete User By ID</button>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "stretch",margin:"0 20px"}}>
            <h4 style={{textAlign: "center"}}>postRoutes.js</h4>
            <button className="btn btn-warning" onClick={handleAllPosts} style={{margin: "5px 0"}}>Get All Posts</button>
            <button className="btn btn-warning" onClick={handleOnePost} style={{margin: "5px 0"}}>Get a Post by ID</button>
            <button className="btn btn-warning" onClick={handleNewPost} style={{margin: "5px 0"}}>Create a New Post</button>
            <button className="btn btn-warning" onClick={handleEditPost} style={{margin: "5px 0"}}>Edit Post by ID</button>
            <button className="btn btn-warning" onClick={handleDeletePost} style={{margin: "5px 0"}}>Delete Post by ID</button>
            <button className="btn btn-warning" onClick={handleAllCommentsForPostID} style={{margin: "5px 0"}}>Get All Comments for Post ID</button>
            <button className="btn btn-warning" onClick={handleNewCommentForPostID} style={{margin: "5px 0"}}>Create New Comment for Post ID</button>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "stretch", margin:"0 20px"}}>
            <h4 style={{textAlign: "center"}}>commentRoutes.js</h4>
            <button className="btn btn-success" onClick={handleAllComments} style={{margin: "5px 0"}}>Get All Comments</button>
            <button className="btn btn-success" onClick={handleOneComment} style={{margin: "5px 0"}}>Get One Comment</button>
            <button className="btn btn-success" onClick={handleEditComment} style={{margin: "5px 0"}}>Edit Comment by ID</button>
            <button className="btn btn-success" onClick={handleDeleteComment} style={{margin: "5px 0"}}>Delete Comment by ID</button>
        </div>
        </div>
      </div>): <div><h1>You're not logged in.</h1></div>}
      <ul className='list-group'>
      {auth ? (group.map(member=>{
      return(
      <li className='list-group-item' key={member.id}><h1>{member.username}</h1></li>
      )
    })) : null}
      </ul>
      {oneU ? (<GetOneUser />) : null}
      {newU ? (<PostNewUser />) : null}
      {editU ? (<PutUser />) : null}
      {deleteU ? (<DeleteUser />) : null}
      {allP ? (<GetAllPosts />) : null}
      {oneP ? (<GetOnePost />) : null}
      {newP ? (<PostNewPost />) : null}
      {editP ? (<PutPost />) : null}
      {deleteP ? (<DeletePost />) : null}
      {allC4P ? (<GetCForP />) : null}
      {newC4P ? (<PostCForP />) : null}
      {allC ? (<GetAllComments />) : null}
      {oneC ? (<GetOneComment />) : null}
      {editC ? (<PutComment />) : null}
      {deleteC ? (<DeleteComment />) : null}
    </div>
    )
   
}

export default Home;