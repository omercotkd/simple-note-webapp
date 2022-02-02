import React from 'react';
import SaveIcon from '@material-ui/icons/Save';

const Save = () => {

    const saveNotes = () => {
        console.log("test");
    };

    return(
        
        <SaveIcon 
                className='save-icon'
                onClick={saveNotes}
        />
                
    )
};


export default Save;