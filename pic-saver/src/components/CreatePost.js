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
        //console.log("event", event.target.name, event.target.value);
        setPost(event.target.value);
      };

    const handleCaptionChange = (event) =>{
        setCaption(event.target.value)
    }

    const handleSubmit  = async(evt) => {
        // evt.preventDefault()
        console.log("submit data", JSON.stringify({post,
            user_id}))
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

        console.log("res",res)
        history.push('/home')
        // window.location.reload()
    }

    const handleUser = (cookie) =>{
        setUser_id(cookie)
    }

    useEffect(() => {
        handleUser(document.cookie)
        console.log('cookie', document.cookie)
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


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import '../App.css';
// import CreateForm from './createForm'
// import apiUrl from './apiConfig'
// import { useHistory } from 'react-router-dom'


// const NewPost = (props) => {

//     const [post, setPost] = useState("")
//     const [caption, setNewCaption] = useState("")
//     const [user_id, setUser_id] = useState(0)
//     const history = useHistory()

//     const handlePostChange = (evt) => {
//         setPost(evt.target.value)
//     }

//     const handleCaptionChange = (evt) => {
//         setNewCaption(evt.target.value)
//     }

    

//     const handleSubmit = (evt) => {
//         evt.preventDefault()
//         fetch(`${apiUrl}/posts`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             data: JSON.stringify({
//                 post,
//                 caption,
//                 user_id
//             }),
//         })
//         .then(resp => resp.json())
//         .then(data => {
//             localStorage.setItem("token", data.jwt)
//             handleUser(data.user)
//         })
//         setPost("")
//         setNewCaption("")
//         history.push('/home')
//     }

//     useEffect(() => {
//         document.cookie = user_id
//         handleUser(document.cookie)
//     })

//     const handleUser = (cookie) => {
//         setUser_id(cookie)
//     }


//     return (
//         <div className='postForm'> 
//         <h4 className="">New Post</h4>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Post</label>
//                 <input name="post" value={post} onChange={handlePostChange} type="text" placeholder="post"/>
//             </div>
//             <div>
//                 <label>Caption</label>
//                 <input name="caption" value={caption} onChange={handleCaptionChange} type="text" placeholder="caption"/>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
            
            

//         </div>
//     );
//   };
//   export default NewPost;