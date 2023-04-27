import ArchivedButton from "./ArchivedButton";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils/Data";

const NotesList = ({id, title, body, archived, createdAt, onDelete, onArchive}) =>{
    const date = showFormattedDate(createdAt);
    return(
        <div className="note_item">
            <h2 className="title">{title}</h2>
            <p className="date">{date}</p>
            <p className="body">{body}</p>
            <DeleteButton id={id} onDelete={onDelete}/>
            <ArchivedButton id={id} onArchive={onArchive} archived={archived}/>
        </div>
    )
} 

export default NotesList;