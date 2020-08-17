import React from 'react'
import '../App.css';

const CreateForm = ({ handleSubmit, handleChange }) => {

    return (
        <form onSubmit={handleSubmit}>
            <label className="Label">Post</label>
            <br />
            <input className="Input"
            placeholder='Post'
            name="post"
            onChange={handleChange}
            />
            <br/>
            <label className="Label">Add Caption</label>
            <br />
            <input className="Caption"
            placeholder='Post Caption'
            name="caption"
            onChange={handleChange}
            />
            <br/>
            <button className="Submit" type="submit">Add your post</button>
        </form>
    )
}
export default CreateForm;