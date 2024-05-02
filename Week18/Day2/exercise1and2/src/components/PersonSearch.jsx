import React, { useState } from 'react'

const PersonSearch = () => {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleReadById = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/persons/${searchId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No person found');
            }
        })
        .then(data => {
            setSearchResult(data);
        })
        .catch(error => {
            setSearchResult('No person found');
        });
};


return (
    <div className="row justify-content-center">
        {/* Sets the whole content in the center */}
        <div>
            <h3 className="text-left mb-4">Search for a person by ID</h3>
            {/* Aligns the text in the center and adds bottom margin */}
            <form>
                <div className="input-group">
                    {/* Sets input button to the right of the input field */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    <div>
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleReadById}
                        >
                            {/* Gives the button some style */}
                            Search
                        </button>
                    </div>
                </div>
            </form>
            {searchResult !== null ? (
                <div>
                    <h2>Search Result</h2>
                    {typeof searchResult === 'string' ? (
                        <p>{searchResult}</p>
                    ) : (
                        <>
                            <p>ID: {searchResult.id}</p>
                            <p>Age: {searchResult.age}</p>
                            <p>Fullname: {searchResult.fullname}</p>
                            <p>Gender: {searchResult.gender}</p>
                            <p>Email: {searchResult.email}</p>
                        </>
                    )}
                </div>
            ) : null}
        </div>
    </div>
);
};

export default PersonSearch