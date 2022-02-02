import React, { useState, useEffect } from "react";

import Header from "./components/heading";
import Footer from "./components/footer";
import CreateArea from "./components/createArea";
import AllNotes from "./components/allNotes";
import Save from "./components/saveNotes";


function App() {
    // a state to save all the notes
    const [allNotes, setAllnotes] = useState([]);

    // a mathod to save a new note to the allNotes list
    const addNewNote = (item) => {
        setAllnotes( prevVelues => (
            [...prevVelues, item]
        ) )
    };

    useEffect(() => {
        fetch("/api/get-notes")
        .then(res => res.json())
        .then(data => {
        setAllnotes(data.notes);
        });
    }, []);

    
    // a mathod that by passing and id will delete the corsponding post
    const deleteNote = (noteId) => {
        console.log(noteId);
        setAllnotes(prevVelues => prevVelues.filter((note, index) => {
            return index !== noteId;
        }));
    };

    return (
        <div>
            <Header />
            <CreateArea addNote={addNewNote} />
            <AllNotes  notes={allNotes} deleteFunc={deleteNote}/>
            <Save/>
            <Footer />
        </div>
    );
}

export default App;