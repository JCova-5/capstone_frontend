import React, {useState} from 'react'


function SignInForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [bio, setBio] = useState("")
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
    
    const handleBioChange = (evt) => {
        setBio(evt.target.value)
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
                profile_img, 
                bio
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
        setBio("")
    }
    
    return(
        <div className="login-form">
            <h1>Sign Up</h1>
            <form className="ui form" onSubmit={handleSubmit}>
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
                <div className="field">
                    <label>Profile_img</label>
                    <br/>
                    <input value={profile_img} onChange={handleProfile_imgChange} type="text" placeholder="add avatar"/>
                </div>
                <div className="field">
                    <label>Bio</label>
                    <br/>
                    <input value={bio} onChange={handleBioChange} type="text" placeholder="Tell us about you."/>
                </div>
                <br/>
                
                <button className="ui button" type="submit">Submit</button>
            </form>
            
        </div>
        
    )
}

export default SignInForm;