import React, { useContext, useEffect, useState } from 'react';
import notecontext from "./context/notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {

  const context = useContext(notecontext);
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, []);
  const [note, setNote] = useState({
    id:"",
    title: "",
    description: "",
    tag: ""
  });
  const updateNote = (currentNote) => {
    setNote({
      id:currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag
    });
    openModal(); // Open modal after setting the state with note details
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("updating the note...")
    editNote(note.id,note.title,note.description,note.tag)
    closeModal();
  };
  return (
    <>
      <AddNote />


        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-1/2">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Title"
                  value={note.title}
                  onChange={handleChange}
                  name='title'
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Description"
                  value={note.description}
                  onChange={handleChange}
                  name='description'
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
                  tag
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="tag"
                  type="text"
                  placeholder="tag"
                  value={note.tag}
                  onChange={handleChange}
                  name='tag'
                />
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>

              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Your notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {notes.map((note) => {
            return <NoteItem key={note._id} updateNote={updateNote} note={note} />
          })}
        </div>
      </div>
    </>
  );
}

export default Notes;
