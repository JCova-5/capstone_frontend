import React, {useState} from 'react'

function SignInForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [profile_img, setProfile_img] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleProfile_imgChange = (evt) => {
        setProfile_img(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                profile_img
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)
        })
        setUsername("")
        setPassword("")
        setProfile_img("")
    }
    
    return(
        <div>
            <h1>Sign Up</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                <div className="field">
                    <label>Profile_img</label>
                    <input value={profile_img} onChange={handleProfile_imgChange} type="text" placeholder="add avatar"/>
                </div>
                
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignInForm;