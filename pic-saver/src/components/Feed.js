import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePost from './CreatePost';
import axios from "axios";
import apiUrl from  "./apiConfig";
import Nav from "./Nav";
import Footer from "./Footer";


const Feed = () => {
  console.log('post')
  const [post, setPost] = useState([]);

  


  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const response = await axios(`${apiUrl}/posts`);
        // console.log("post - useEffect - response", response);
        setPost(response.data.reverse());
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);


  const postArr = post.map((post) => (
    <li key={post.id}>
        <Link className="order-name "to={`/home`}>{post.username}</Link>
        <h2>{post.user.username}</h2>
        <img className="feedProfileImage" src = {post.user.profile_img} alt='Profile Avatar on feed'/>
        <br/>
        <img className="feedPostPic" src = {post.post} alt='new post on feed'/>
        <p>{post.caption}</p>
        

    </li>
  ));


  return (
    <>
        <Nav/>
        <h4>Feed</h4>
        <div className="feed">
            <ul className="feedPost">
              {postArr}
            </ul>
        </div>
        <div className="newPost">
          <CreatePost/>
        </div>
        <Footer/>
    </>
  );
};
export default Feed;


