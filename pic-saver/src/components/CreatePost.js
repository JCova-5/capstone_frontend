import React, { useState } from "react";
import axios from "axios";
import SongForm from './SongForm'
import '../App.css';


const NewSong = ({setSong}) => {
  const [input, setInput] = useState({ post: "", caption: ""});
//   const [item, setItem] = useState(null);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
  
    event.preventDefault();
    console.log("handleSubmit");
    axios({
      url: `http://localhost:3000/posts`,
      method: "POST",
      data: input,
    })
      .then((res) => {
          setSong({ createdItem: res.data })

        //   props.history.push('/songs')
        })
      .catch(console.error);
      event.target.reset()
  };

  return (
    <div className='newsong'> 
    <h4>New Post</h4>
    <SongForm 
        // item={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
    />
    </div>
  );
};

export default NewSong;