import React, { useContext, useEffect, useState } from 'react';
import notecontext from "../context/noteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(notecontext);
  const { getNotes, editNote } = context;
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notesData = await getNotes();
        setNotes(notesData || []); // Ensure it's an array or default to an empty array
      } catch (error) {
        // Handle error fetching notes
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getNotes]);

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag
    });
    openModal();
  };

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
    console.log("updating the note...");
    editNote(note.id, note.title, note.description, note.tag);
    closeModal();
  };

  return (
    <>
      <AddNote />
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={note.title}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Title"
                />
              </div>
              {/* Rest of your form fields */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right"
                onClick={closeModal}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Your notes</h2>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
          {notes.length === 0 && 'No Notes to display'}
          {notes.map((note) => (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
