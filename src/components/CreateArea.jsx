import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote =>{
        return {
            ...prevNote,
            [name]:value,
        }
    })
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({title:"", content:""});
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create=Note">
        {isExpanded && <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        }
        
        <textarea 
        name="content" onChange={handleChange} onClick={expand} placeholder="Take a note..." value={note.content} rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded}>
            <button onClick={submitNote}><AddIcon/></button>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
