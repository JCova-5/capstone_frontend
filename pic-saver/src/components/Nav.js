import React  from 'react'
import { NavLink, useHistory } from 'react-router-dom'



const Nav = () => {
    const history = useHistory();

    const signOut = () => {
        document.cookie = null
        localStorage.clear()
        history.push('/')
    }

    const userProf = (id) => {
        history.push(`/profile/${id}`)
    }

    return (
        <nav>
            <NavLink className="navLink" to='/home'>Home</NavLink>
            <span className="prof" onClick={()=>userProf(document.cookie)}>Profile</span>
            {localStorage.length > 0 ? <NavLink className="navLink" to='/' onClick={signOut}>sign out</NavLink> : <NavLink to='/'>Sign In</NavLink>}
        </nav>
    )
    
}
export default Nav;
