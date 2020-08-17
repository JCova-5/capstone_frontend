import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePost from './CreatePost'
import axios from "axios";
import apiUrl from  "./apiConfig"


const Feed = () => {
  console.log('post')
  const [post, setPost] = useState([]);
  const [newPost, setNewPost] = useState(null);
  


  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const response = await axios(`${apiUrl}/posts`);
        console.log("post - useEffect - response", response);
        setPost(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);

  

  const postArr = post.map((post) => (
    <li key={post.id}>
        <Link className="order-name "to={`/home`}>{post.username}</Link>
        <h1>{post.user.username}</h1>
        <img className="feedProfileImage" src = {post.user.profile_img} alt='Profile Avatar on feed'/>
        <img className="feedPostPic" src = {post.post} alt='new post on feed'/>
        <p>{post.caption}</p>

    </li>
  ));


  return (
    <>
        <div className="newPost">
        <h4>Feed</h4>
            <ul className="feedPost">{postArr}</ul>
        </div>
        <div className="newPost">
          <CreatePost/>
        </div>
    </>
  );
};
export default Feed;


