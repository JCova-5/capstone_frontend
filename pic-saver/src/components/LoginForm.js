import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom'

const Login = props => {
   
    const [input, setInput] = useState({ username: "", password: "" });
    const [user, setUser] = useState({})
    const history = useHistory()

    const handleLogin = (user) => {
        setUser(user)
      }

    const handleChange = (event) => {
        //console.log("event", event.target.name, event.target.value);
        setInput({
          ...input,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit  = async(evt) => {
        evt.preventDefault()
        let res = await axios({
            url: "http://localhost:3000/users/login",
            method: "POST",
            data: input,
            headers: {
                          "Content-Type": "application/json",
                          "Accept": "application/json"
                      },
          })
        document.cookie = res.data.user.id
        console.log("res",res)
        localStorage.setItem('token',res.data.token)
        handleLogin(res.data.user)
        console.log(localStorage)
        history.push(`/home`)
    }

    


    
    return(
        <div>
            <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input name="username"value={input.username} onChange={handleChange} type="text" placeholder="username"/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password"value={input.password} onChange={handleChange} type="password" placeholder="password"/>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    
        </div>
    )
} 

export default Login;


// import React, {useState, useEffect} from 'react'
// import { useHistory } from 'react-router-dom'
// import apiUrl from './apiConfig'

// function LogInForm(props){
//     const [user, setUser] = useState({})
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const history = useHistory()


//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value)
//     }

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value)
//     }

//     const handleLogin = (user) => {
//         setUser(user)
//     }

//     useEffect(() => {
//         const token = localStorage.getItem("token")
//         if(token){
//           fetch(`${apiUrl}/users/`, {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           })
//           .then(resp => resp.json())
//           .then(data => {
//             setUser(data)
//             // console.log(data)
//           })
//         }
//       }, [])

//     const handleSubmit = (evt) => {
//         console.log('login form handlesubmit')
//         evt.preventDefault()
//         fetch(`${apiUrl}/users/login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({
//                 username,
//                 password
//             })
//         })
//         .then(resp => resp.json())
//         .then(data => {
//             document.cookie = data.user.token
//             console.log("res",data)
//             localStorage.setItem('token', data.token)
//             handleLogin(data.user)
//             console.log(localStorage)
//             history.push('/home')
//         })
//         setUsername("")
//         setPassword("")
//     }

//     useEffect(() => {

//     }, [])

//     return (
//         <div>
//             <h1>Log In</h1>
//             <div>
//                 <form className="" onSubmit={handleSubmit}>
//                     <div className="field">
//                         <label>Username</label>
//                         <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
//                     </div>
//                     <div className="field">
//                         <label>Password</label>
//                         <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
//                     </div>
//                     <button className="" type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default LogInForm;



// import React, {useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom'
// import { axios } from 'axios'
// import { Link } from 'react-router-dom'

// import apiUrl from './apiConfig'

// function LoginForm(props){
//     const [user, setUser] = useState({})
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const history = useHistory();

//     const handleUsernameChange = (evt) => {
//         setUsername(evt.target.value)
//     }

//     const handlePasswordChange = (evt) => {
//         setPassword(evt.target.value)
//     }
    
//     useEffect(() => {
//         const token = localStorage.getItem("token")
//         if(token){
//           fetch(`${apiUrl}/users/`, {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           })
//           .then(resp => resp.json())
//           .then(data => {
//             setUser(data)
//             // console.log(data)
//           })
//         }
//       }, [])

//     const handleSubmit = async(evt) => {
//         evt.preventDefault()
//         let response = await axios({
//             url: `${apiUrl}/users/login`,
//             method: "POST",
//             data: JSON.stringify({
//                 username,
//                 password
//             }),
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 }
//             })
//             document.cookie = response.data.user.id
//             props.handleLogin(response.data.user)
//             console.log('response', response)
//             // if (data.status == 200){
//                 history.push(`/home`)
//             // }
//             // else {
//             //     alert("The Password Or Username You Have Entered Is Incorrect, Please Try Again")
//             // }
//         }
    
        
   
//     return(
//         <div>
//             <div>
//             <h1>Log In</h1>
//             <form className="ui form" onSubmit={handleSubmit}>
//                 <div className="field">
//                     <label>Username: </label>
//                     <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
//                 </div>
//                 <div className="field">
//                     <label>Password: </label>
//                     <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
//                 </div>
                
//                 <button className="ui button" type="submit">Submit</button>
//             </form>
//         </div>
//         </div>
//     )
// } 

// export default LoginForm