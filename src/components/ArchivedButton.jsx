import React from "react";

const ArchivedButton = ({id, archived, onArchive}) => {
    return (
        <React.Fragment>
            {   
            archived === false ? 
                <button className="note-item__archived" 
                onClick={() => onArchive(id)}>Archive</button> :
                <button className="note-item__archived"
                onClick={() => onArchive(id)}>Unarchive</button>
            }
        </React.Fragment>        
    )
}
export default ArchivedButton;