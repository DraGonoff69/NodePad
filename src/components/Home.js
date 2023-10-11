// src/components/CreatePost.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Notes from './Notes';
const CreatePost = () => {

  // const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the title, description, and tags
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Tags:', tags);

    // Redirect to a different route (for example, a list of posts)
    // history.push('/posts');
  };

  return (
    <div className="container mx-auto mt-5 p-5 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-3">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border rounded w-full py-2 px-3"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="border rounded w-full py-2 px-3"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="tags">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            className="border rounded w-full py-2 px-3"
            value={tags}
            onChange={handleTagsChange}
          />
        </div>
        <button

            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
          <Link to="/notes" className="block text-center mt-4 text-blue-500">
            Cancel
          </Link>
      </form>
      <Notes/>
    </div>
  );
};

export default CreatePost;
