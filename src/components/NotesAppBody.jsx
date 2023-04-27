
import React from "react";
import NotesForm from "./NotesForm"
import Search from "./Search";
import ShowArchieved from "./ShowArchieved";
import ShowNotes from "./ShowNotes";
import { Data } from "../utils/Data";

class NotesAppBody extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: Data(),
            notesArchived: Data(),
        }

        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
        this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onAddNotesHandler({title, body}){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date()
                    }
                ],
                notesArchived : [
                    ...prevState.notesArchived,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date()
                    }
                ]

            }
        });
    }

    onDeleteNotesHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onArchiveNotesHandler(id) {
        const noteToArchived = this.state.notesArchived.filter(note => note.id === id)[0];
        const archivedNote = { ...noteToArchived, archived: !noteToArchived.archived};
        console.log(archivedNote)
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes.filter(note => note.id !== id),
                    archivedNote
                ],
                notesArchived: [
                    ...prevState.notesArchived.filter(note => note.id !== id),
                    archivedNote
                ]
            }
        })
    }

    onSearchHandler(input){
        if (input.length !== 0 && input.trim() !== ''){
            this.setState({
                notes: this.state.notesArchived.filter(note => note.title.toLowerCase().includes(input.toLowerCase())),
            })
        }else{
            this.setState({
                notes: this.state.notesArchived,
            })
        }
    }

    render(){
        return (
            <main>
                <div className="kiri">
                    <NotesForm addNotes={this.onAddNotesHandler}/>
                    <Search onSearch={this.onSearchHandler}/>
                </div>
                <div className="kanan">
                <aside>
                    <ShowNotes notes={this.state.notes} onDelete={this.onDeleteNotesHandler} onArchive={this.onArchiveNotesHandler}/>
                    <ShowArchieved notes={this.state.notes} onDelete={this.onDeleteNotesHandler} onArchived={this.onArchiveNotesHandler}/>
                </aside>
            </div>   
            </main>
        )
    }
   
}

export default NotesAppBody;