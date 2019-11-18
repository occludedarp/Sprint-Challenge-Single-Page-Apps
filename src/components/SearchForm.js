import React from "react";

export default function SearchForm(props) {
  return (
    <section className = "search-form">
     <form>
       <label htmlFor = "name">search</label>
       <input 
        id = "name" 
        type = "text" 
        name = "searchbar"
        placeholder = "Search" 
        onChange = {(e) => props.search(e.target.value)}
       />
     </form>
    </section>
  );
};