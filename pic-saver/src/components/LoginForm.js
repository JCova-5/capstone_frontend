
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import apiUrl from './apiConfig'

function LogInForm(props){
    const [user, setUser] = useState({})
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()


    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = (user) => {
        setUser(user)
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
          fetch(`${apiUrl}/users/`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(resp => resp.json())
          .then(data => {
            setUser(data)
            // console.log(data)
          })
        }
      }, [])

    const handleSubmit = (evt) => {
        console.log('login form handlesubmit')
        evt.preventDefault()
        fetch(`${apiUrl}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            document.cookie = data.user.id
            console.log("res",data)
            localStorage.setItem('token', data.token)
            handleLogin(data.user)
            console.log(localStorage)
            history.push('/home')
        })
        setUsername("")
        setPassword("")
    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <h1>Log In</h1>
            <div>
                <form className="" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Username</label>
                        <br/>
                        <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <br/>
                        <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                    </div>
                    <button className="" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default LogInForm;


