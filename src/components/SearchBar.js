import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
    const [term, setTerm] = useState('');

    const onSubmitForm = event => {
        event.preventDefault();
        //Make sure to call 
        //callback from parent component
        onSearch(term);
    }

    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmitForm} className="ui form">
            <div className="filed">
            <label>Video Search</label>
            <input type="text" 
            placeholder="Search Any Video You Want From Youtube"
            value={term}
            onChange={(event) => {setTerm(event.target.value)}}
            />
            </div>
            </form>
            </div>
        );
};

export default SearchBar;