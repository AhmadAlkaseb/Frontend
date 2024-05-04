import React, { useState } from 'react'

const PersonSearch = () => {
    const [searchPerson,setSearchPerson] = useState('');
    const [personFound,setPersonFound] = useState(null);
    const [searched, setSearched] = useState(false);

    const handleReadPerson = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3001/persons/${searchPerson}`)
        .then((response) => response.json()) 
        .then(data => (setPersonFound(data)))
        .catch(() => 
            setPersonFound(null),
            setSearched(true)
            );
    }
  return (
    <>
    <form>
        <input type='number' value={searchPerson} placeholder='Search person' onChange={(event) => setSearchPerson(event.target.value)}/>

        <button type='button' onClick={handleReadPerson}>Search</button>
    </form>

    {searched && personFound === null && (
                <p>No person found</p>
    )}

    {personFound && (
        <>
        <p>Id: {personFound.id}</p>
        <p>Age: {personFound.age}</p>
        <p>Fullname: {personFound.fullname}</p>
        <p>Gender: {personFound.gender}</p>
        <p>Email: {personFound.email}</p>
        </>
    )}
    </>
  )
}

export default PersonSearch
