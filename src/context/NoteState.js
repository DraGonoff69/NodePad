import React, { useState, useEffect } from "react";
import NoteContext from "../context/noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const data = await response.json();
      console.log("Adding a new note");

      const newNote = {
        "_id": data._id,
        "user": "6520f5003a0f565f0eeb1b49",
        "title": title,
        "description": description,
        "tag": tag,
        "date": data.date,
        "__v": 0
      }
      setNotes([...notes, newNote]); // Make sure to use the updated state
    } catch (error) {
      console.error('Error adding note:', error);
    }
  }

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      });

      if (response.ok) {
        const updatedNotes = notes.filter(note => note._id !== id);
        setNotes(updatedNotes);
      } else {
        const json = await response.json();
        console.error('Error deleting note:', json);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }

  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (response.ok) {
        const updatedNotes = notes.map(note => (
          note._id === id ? { ...note, title, description, tag } : note
        ));
        setNotes(updatedNotes);
      } else {
        const errorData = await response.json();
        console.error('Error editing note:', errorData);
      }
    } catch (error) {
      console.error('Error editing note:', error);
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes: fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
