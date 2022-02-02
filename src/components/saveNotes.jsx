import React from 'react';
import SaveIcon from '@material-ui/icons/Save';

const Save = (props) => {

    const saveNotes = () => {
        const notesToSend = {
            "data":props.notes
        };
        fetch("/save-notes", { method: "POST", body: JSON.stringify(notesToSend)})
    };

    return(
        
        <SaveIcon 
                className='save-icon'
                onClick={saveNotes}
        />
                
    )
};


export default Save;