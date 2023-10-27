import React, { useState, useEffect } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]); // Changed initial state to an empty array

  useEffect(() => {
    getNotes(); // Fetch notes when component mounts
  }, []);

  // Get all notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyY2Y4YTAyNjU0YTUwOTdkZTVkMzljIn0sImlhdCI6MTY5NzQ0NjA0OH0.9mhgPPWNcBJ9O3uGFOO4Yt6xZqA_QNTze0VTGR1RUXs" // Replace with your actual token
        }
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

  // Add a note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyY2Y4YTAyNjU0YTUwOTdkZTVkMzljIn0sImlhdCI6MTY5NzQ0NjA0OH0.9mhgPPWNcBJ9O3uGFOO4Yt6xZqA_QNTze0VTGR1RUXs" // Replace with your actual token
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
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  }

  // Delete a note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyY2Y4YTAyNjU0YTUwOTdkZTVkMzljIn0sImlhdCI6MTY5NzQ0NjA0OH0.9mhgPPWNcBJ9O3uGFOO4Yt6xZqA_QNTze0VTGR1RUXs" // Replace with your actual token
        }
      });
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        const updatedNotes = notes.filter(note => note._id !== id);
        setNotes(updatedNotes);
      } else {
        console.error('Error deleting note:', json);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyY2Y4YTAyNjU0YTUwOTdkZTVkMzljIn0sImlhdCI6MTY5NzQ0NjA0OH0.9mhgPPWNcBJ9O3uGFOO4Yt6xZqA_QNTze0VTGR1RUXs" // Replace with your actual token
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const data = await response.json();
      console.log('Note updated:', data);

      const updatedNotes = notes.map(note => (
        note._id === id ? { ...note, title, description, tag } : note
      ));
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error editing note:', error);
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;

