import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from './apiConfig';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';


const Profile = props => {
    const [user, setUser] = useState([]);
    const [posts,setPosts]= useState([]);


    console.log('props',props)



    const makeAPICall = async () => {
        let posts = null
        try {
          const response = await axios(`${apiUrl}/users/${props.match.params.id}`)
          setUser(response.data)
          posts = response.data.posts
        } catch (err) {
          console.error(err)
        }
        setPosts(posts)
      }
    
      useEffect(() => {
        makeAPICall()
        console.log('cookie', document.cookie)
        console.log('user id', user.id)
      }, [])

      const destroy = async (id) => {
        await axios({
          url: `${apiUrl}/posts/${id}`,
          method: 'DELETE'
        })
        makeAPICall()
        console.log(id)
      }

      
      const postMap = posts.map( post => (
        <div className="post" key={post.id}>
            <div className="postuser">
                <img className="profile-img" src={user.profile_img} />
                <div>{user.username}</div>
            </div>
            <img src={post.post} />
            <p>{post.caption}</p>
            {/* {post.img === null? null: <img src={post.img}/>} */}
            <div>{post.created_at}</div>
            <div>Likes: {post.likes}</div>
            <h1>{document.cookie === props.match.params.id ? <span onClick={()=>destroy(post.id)}>Delete Post</span>: null}</h1>
        </div>
    ))

   
    return(
        <div>
            <Nav/>
            <h1>Profile</h1>
            {/* <img className="profile-img" src={user.profile_img}/> */}
            {/* {user.username}
            {user.post} */}
            {document.cookie === props.match.params.id ? <NavLink to='/edit'>Edit Account</NavLink> : null}
            {postMap}
        </div>
    )
}

export default Profile;