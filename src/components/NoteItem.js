import React, { useContext } from 'react';
import NoteContext from "../context/noteContext";

const NoteItem = (props) => {
    const { note,updateNote } = props;
    const { deleteNote } = useContext(NoteContext); // Use the useContext hook to access context functions
    const handleEditClick = () => {
        // Call editNote function to open modal with note details
        updateNote(note);
    };
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-1">
                <div className="font-bold text-xl mb-2">{note.title}</div>
                <p className="text-gray-700 text-base">
                    {note.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">{note.tag}</span>
            </div>
            <i className="fas fa-trash ml-8" onClick={() => deleteNote(note._id)}></i>
            <i className="far fa-edit ml-2" onClick={handleEditClick}></i>
        </div>
    )
}

export default NoteItem;
