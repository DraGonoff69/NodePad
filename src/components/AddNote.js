import React, { useState, useContext } from 'react';
import notecontext from "./context/notes/noteContext";
// import { Link } from 'react-router-dom';

const AddNote = () => {
  const context = useContext(notecontext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tags: "" // Changed from 'tag' to 'tags'
  });

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    addNote(note.title,note.description,note.tags); // Use 'addNote' instead of 'addNotes'

    // Clear the form after adding the note
    setNote({
      title: "",
      description: "",
      tags: ""
    });
  };
  return (
    <div className="container mx-auto mt-5 p-5 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-3">Create a New Post</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title" // Match the 'name' attribute with state property
            className="border rounded w-full py-2 px-3"
            onChange={handleChange}
            value={note.title}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            name="description" // Match the 'name' attribute with state property
            className="border rounded w-full py-2 px-3"
            onChange={handleChange}
            value={note.description}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Tags
          </label>
          <input
            type="text"
            name="tags" // Match the 'name' attribute with state property
            className="border rounded w-full py-2 px-3"
            onChange={handleChange}
            value={note.tags}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Add Note
        </button>
        {/* <Link to="/notes" className="block text-center mt-4 text-blue-500">
          Cancel
        </Link> */}
      </form>
    </div>
  );
}

export default AddNote;
