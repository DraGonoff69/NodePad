import React, { useContext } from 'react';
import notecontext from "./context/notes/noteContext";
import NoteItem from './NoteItem';

const Notes = () => {
  const context = useContext(notecontext);
  const { notes, setNotes } = context;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {notes.map((note) => {
 return <NoteItem note={note}/>
      })}
      </div>
    </div>
  );
}

export default Notes;
