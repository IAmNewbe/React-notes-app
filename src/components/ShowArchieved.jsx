import NotesList from "./NotesList";
import React from "react";

const ShowArchieved = ({notes, onArchived, onDelete}) => {
    const showArchived = notes.filter(note => note.archived === true);
    console.log(showArchived);
    if (showArchived.length >= 1){
        return(
            <section class="note_shelf" id="cariBuku">
                <h2>Catatan Arsip</h2>
                <div class="note_list">
                    {showArchived.map((note) => (
                        <NotesList {...note} key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} onArchive={onArchived} onDelete={onDelete}/>
                    ))}
                    
                </div>
            </section>
        )
        
    }else{
        return(
            <React.Fragment>
                <section class="note_shelf" id="cariBuku">
                    <h2>Catatan Aktif</h2>
                    <div class="note_list">
                        <div className="note_item">
                            <h2 className="title">Tidak Ada Catatan</h2>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
    
}

export default ShowArchieved;