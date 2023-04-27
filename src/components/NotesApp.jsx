import React from "react"
import Header from "./Header"
import NotesAppBody from "./NotesAppBody"

const NotesApp = () => {
    return (
        <React.Fragment>
            <Header />
            <NotesAppBody />
        </React.Fragment>
    )
}

export default NotesApp;