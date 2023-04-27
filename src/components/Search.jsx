import React from "react";

const Search = ({onSearch}) => {
    const searchInput = (event) => {
        onSearch(event.target.value)
    }
    return(
        <section className="Form_Cari">
            <h2>Cari Judul Catatan</h2>
            <form id="searchBook">
                <label>Judul</label>
                <input placeholder="Masukkan judul" type="text" 
                onChange={searchInput}/>
                <a href="#cariBuku" onClick={searchInput}>Cari</a>
            </form>
        </section>
    )

}
       

export default Search;