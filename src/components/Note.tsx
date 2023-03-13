import React from "react";

const Note = (props: any) => {
  const note:any = props.note
    // console.log(note)
  return <li key={note.id}>{note.content}</li>;
};


export default Note;
