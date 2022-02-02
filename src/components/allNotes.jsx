import React from "react";
import Note from "./note";

// this component will return all the notes as a "Note" components and will add a key and id to each one
const AllNotes = (props) => {
    return(
        <div>
            {
            props.notes.map((note, index) => (
                <Note title={note.title}
                        content={note.content}
                        key={index}
                        id={index}
                        deleteFunc={props.deleteFunc}
                />
            ))
            }
        </div>
    );
};
export default AllNotes