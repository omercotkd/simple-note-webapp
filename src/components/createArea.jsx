import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Feb from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom"

function CreateArea(props) {

    // A state for the new note area 
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
        id: ""
    });  

    // A state to check if something need to be visable or not
    const [visible, setvisible] = useState(false);

    // update the newNote state on changes in the add note inputs fields
    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewNote(prevVelues => (
            {
                ...prevVelues,
                [name]: value
            }
        ));
    };

    // function to handle the add button press
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addNote(newNote);
        setNewNote({
            title: "",
            content: "",
            id: props.length + 1
        })
        setvisible(false);
    };

    // function to change the state visable 
    const expandTextArea = () => {
        setvisible(true);
    };

    return (
        <div>
        {/* the form for a new note */}
        <form className="create-note">
            {
                visible &&
            <div>
            <input 
                name="title" 
                placeholder="Title" 
                value={newNote.title}
                onChange={handleChange}
                />
            </div>
            }

            <textarea 
                name="content" 
                placeholder="Take a note..." 
                rows={visible ? "3" : "1"} 
                value={newNote.content}
                onChange={handleChange}
                onClick={expandTextArea}
            />
            {/* the add button */}
            <Zoom in={visible}>
                <Feb onClick={handleSubmit}><AddIcon/></Feb>
            </Zoom>

        </form>
        </div>
    );
};

export default CreateArea;

