import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Area";

function App() {
    const [notes, setNotes] = useState([
        {
            title: "This is a new title",
            content: "This is a new content"
        }
    ]);

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    function removeNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => index !== id);
        });
    }

    return <div>
        <Header />
        <Form onAdd={addNote} />
        {notes.map((note, index) => {
            return <Note
                key={index}
                id={index}
                onDelete={removeNote}
                title={note.title}
                content={note.content} />
        })}
        <Footer />
    </div>
}

export default App;