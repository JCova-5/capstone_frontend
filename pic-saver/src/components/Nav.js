import React  from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const Nav = () => {
    const history = useHistory();

    const signOut = () => {
        document.cookie = null
        localStorage.clear()
        history.push('/')
    }

    return (
        <nav>
            <NavLink to='/home'>Home</NavLink>
            {localStorage.length > 0 ? <NavLink onClick={signOut}>sign out</NavLink> : <NavLink to='/'>Sign In</NavLink>}
            
        </nav>
    )
    
}
export default Nav;
