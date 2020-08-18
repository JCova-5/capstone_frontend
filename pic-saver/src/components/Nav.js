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
            <NavLink to='/home'>Home</NavLink>
            <span onClick={()=>userProf(document.cookie)}>Profile</span>
            {localStorage.length > 0 ? <NavLink to='/' onClick={signOut}>sign out</NavLink> : <NavLink to='/'>Sign In</NavLink>}
        </nav>
    )
    
}
export default Nav;
