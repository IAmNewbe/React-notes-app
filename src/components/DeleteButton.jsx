import React from "react";

const DeleteButton = ({id, onDelete}) => {
    return (
        <button className="note-item__delete" 
        onClick={() => onDelete(id)}>Delete</button>
    )
}

export default DeleteButton;