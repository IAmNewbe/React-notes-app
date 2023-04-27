import React from "react";

class NotesForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            char: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        event.preventDefault();
        this.setState(() => {
            return{
                title: event.target.value,
                char: 50 - event.target.value.length,
            };
        });

        if(this.state.char <= 0){
            window.alert("karakter judul melebihi batas");
        }

    }

    onBodyChangeEventHandler(event){
        event.preventDefault();
        this.setState(() => {
            return{
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        if(this.state.char <= 0){
            window.alert("karakter judul melebihi batas");
        }else{
            this.props.addNotes(this.state);
        }   
    }

    render(){
        return(
            <section className="Form_note">
                <h2>Masukkan Catatan Baru</h2>
                <form>
                    <div className="input">
                        <div>
                            <label>Judul</label>
                            <p>Karakter Tersisa: {this.state.char}</p>
                        </div>
                        <input type="text" placeholder="Masukkan judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    </div>
                    <div className="input">
                        <label >Catatan</label><br></br>
                        <textarea placeholder="Masukkan Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    </div>
                    
                    <button type="submit" onClick={this.onSubmitEventHandler}>Tambahkan</button>
                </form>
            </section>
        )
    }
}

export default NotesForm;