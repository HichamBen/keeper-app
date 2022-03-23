import React, { useState } from "react";
import AddButton from "@mui/icons-material/AddOutlined";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Area(props) {
  let [isExpand, setExpand] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return { ...prevNote, [name]: value }
    })
  }
  function handleClick() {
    setExpand(true);
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setExpand(false);
    e.preventDefault();
  }

  return <div className="form">
    <form>
      {isExpand && <input onChange={handleChange}
        type="text" name="title" value={note.title} placeholder="Title" />}
      <textarea 
        onClick={handleClick}
        onChange={handleChange}
        name="content" value={note.content}
        rows={isExpand ? 3 : 1}
        placeholder="Take a note..." />
      <Zoom in={isExpand}>
        <Fab id="btn" onClick={submitNote}><AddButton /></Fab>
      </Zoom>
    </form>
  </div>
}

export default Area;