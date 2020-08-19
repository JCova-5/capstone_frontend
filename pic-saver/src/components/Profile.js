import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from './apiConfig';
import Nav from './Nav';
import Footer from './Footer';


const Profile = props => {
    const [user, setUser] = useState([]);
    const [posts,setPosts]= useState([]);

    const makeAPICall = async () => {
        let newPost = null
        try {
          const response = await axios(`${apiUrl}/users/${props.match.params.id}`)
          setUser(response.data)
          newPost = response.data.posts
        } catch (err) {
          console.error(err)
        }
        setPosts(newPost.reverse())
      }
    
      useEffect(() => {
        makeAPICall()
      }, [])

      const destroy = async (id) => {
        await axios({
          url: `${apiUrl}/posts/${id}`,
          method: 'DELETE'
        })
        makeAPICall()
      }

      
      const postMap = posts.map( post => (
        <div className="post" key={post.id}>
            <img className="profileFeed" src={post.post} />
            <p>{post.caption}</p>
            <div>Likes: {post.likes}</div>
            <p>{document.cookie === props.match.params.id ? <button><span onClick={()=>destroy(post.id)}>Delete Post</span></button>: null}</p>
        </div>
    ))

   
    return(
        <div>
            <Nav/>
            <h1>Profile</h1>
            <div className="profileHeader">
                <h2>{user.username}</h2>
                <img className='feedProfileImage' src = {user.profile_img} alt='profile avatar' />   
                <p>{user.bio}</p>
            </div>
            <div className="feed">
                <ul className ="feedPost">
                {postMap}  
                </ul>
            </div>
            
            
            <Footer/>
        </div>
    )
}

export default Profile;