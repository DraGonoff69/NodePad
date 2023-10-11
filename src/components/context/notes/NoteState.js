import React, {useState} from "react";
import NoteContext from "./noteContext";
// import { useState } from "react";
const NoteState=(props)=>{
    const notesInitial=[
            {
              "_id": "6521047c15fac6efd43afa11",
              "user": "6520f5003a0f565f0eeb1b49",
              "title": "ok ok admin ok  Title",
              "description": "mess Description",
              "tag": "mess Tag",
              "date": "2023-10-07T07:10:52.014Z",
              "__v": 0
            },
            {
              "_id": "6526b26a6bdccf0d9dcd42c4",
              "user": "6520f5003a0f565f0eeb1b49",
              "title": "rama rmaa ok admin ok  Title",
              "description": "thike bhai Description",
              "tag": "ram shri Tag",
              "date": "2023-10-11T14:34:18.770Z",
              "__v": 0
            },
            {
              "_id": "6521047c15fac6efd43afa11",
              "user": "6520f5003a0f565f0eeb1b49",
              "title": "ok ok admin ok  Title",
              "description": "mess Description",
              "tag": "mess Tag",
              "date": "2023-10-07T07:10:52.014Z",
              "__v": 0
            },
            {
              "_id": "6526b26a6bdccf0d9dcd42c4",
              "user": "6520f5003a0f565f0eeb1b49",
              "title": "rama rmaa ok admin ok  Title",
              "description": "thike bhai Description",
              "tag": "ram shri Tag",
              "date": "2023-10-11T14:34:18.770Z",
              "__v": 0
            }
    ]
    const [notes, setNotes] = useState(notesInitial);

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;