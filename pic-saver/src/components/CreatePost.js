import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from './apiConfig';
import { useHistory } from 'react-router-dom';

const CreatePost = () => {
    const [user_id, setUser_id] = useState(0)
    const [post, setPost] = useState("");
    const [caption ,setCaption] = useState("");
    const history = useHistory();


    const handlePostChange = (event) => {
        setPost(event.target.value);
      };

    const handleCaptionChange = (event) =>{
        setCaption(event.target.value)
    }

    const handleSubmit  = async(evt) => {
        // evt.preventDefault()
        let res = await axios({
            url: `${apiUrl}/posts`,
            method: "POST",
            data: JSON.stringify({
                post,
                caption,
                user_id
            }),
            headers: {
                          "Content-Type": "application/json",
                          "Accept": "application/json"
                      },
          })

        history.push('/home')
        // window.location.reload()
    }

    const handleUser = (cookie) =>{
        setUser_id(cookie)
    }

    useEffect(() => {
        handleUser(document.cookie)
      }, [])

    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="feedForm">
                    <label>Post:</label>
                    <br/>
                    <input name="post"value={post} onChange={handlePostChange} type="text" placeholder="post"/>
                </div>
                <div>
                    <label>Caption:</label>
                    <br/>
                    <input name="caption"value={caption} onChange={handleCaptionChange} type="text" placeholder="Caption"/>
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost;

