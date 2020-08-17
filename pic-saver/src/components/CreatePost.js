import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';
import CreateForm from './createForm'
import apiUrl from './apiConfig'


const NewPost = (props) => {

    const [post, setPost] = useState("")
    const [caption, setNewCaption] = useState("")
    const [user, setUser] = useState({})

    const handlePostChange = (evt) => {
        setPost(evt.target.value)
    }

    const handleCaptionChange = (evt) => {
        setNewCaption(evt.target.value)
    }

    

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`${apiUrl}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                post,
                caption
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            handleUser(data.user)
        })
        setPost("")
        setNewCaption("")
    }

    const handleUser = (user) => {
        setUser(user)
    }


    return (
        <div className='postForm'> 
        <h4 className="">New Post</h4>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Post</label>
                <input name="post" value={post} onChange={handlePostChange} type="text" placeholder="post"/>
            </div>
            <div>
                <label>Caption</label>
                <input name="caption" value={caption} onChange={handleCaptionChange} type="text" placeholder="caption"/>
            </div>
            <button type="submit">Submit</button>
        </form>
            
            

        </div>
    );
  };
  export default NewPost;