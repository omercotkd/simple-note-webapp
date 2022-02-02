import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Feb from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom"

function Note(props) {
  
   
  const [visible, setvisible] = useState(false);

  const onClickFunction = () => {
    props.deleteFunc(props.id)
  }

  return (
    <div  className="note" 
          // make the delete button visable only if u hover on the note
          onMouseOver={() => setvisible(true)}
          onMouseLeave={() => setvisible(false)}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      { visible &&
      <Zoom in={visible}>
        <Feb onClick={onClickFunction}><DeleteIcon/></Feb>
      </Zoom>
      }
    </div>
  );
};

export default Note;