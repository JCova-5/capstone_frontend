import React from 'react'


function Header(props){
    return(
        <div>
            {/* <h1 style={{color: "white"}}>Pic Saver</h1> */}
            <button className="ui button" onClick={() => props.handleFormSwitch("signUp")}>Sign Up</button>
            <button className="ui button" onClick={() => props.handleFormSwitch("login")}>Log In</button>
        </div>
    )
}

export default Header;