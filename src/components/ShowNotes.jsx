import React from "react";
import NotesList from "./NotesList";

const ShowNotes = ({notes, onDelete, onArchive}) => {
    const showUnarchived = notes.filter(note => note.archived === false);

    if (showUnarchived.length >= 1){
        return(
            <section class="note_shelf" id="cariBuku">
                <h2>Catatan Aktif</h2>
                <div class="note_list">
                    {showUnarchived.map((note) => (
                        <NotesList {...note} key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} onArchive={onArchive} onDelete={onDelete}/>
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
        
export default ShowNotes;