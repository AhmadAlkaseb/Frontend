import React,{useState, useEffect} from 'react'

export default ({updated, setUpdated}) => {

    const [books, setBooks] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/books")
        .then(response => response.json())
        .then(data => setBooks(data))
    }, [updated])


    const handleReadAll = () => {
        console.log("Read all button clicked");
        fetch("http://localhost:3001/books")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data);
                setBooks(data);
            });
    };

    const handleDelete = (e) => {
        console.log("Delete button clicked", e.target.id);
        fetch("http://localhost:3001/books/" + e.target.id, {
            method: "DELETE"
        }).then(() => {
                setUpdated(!updated);
        })
    }

    const handleReadById = () => {
        fetch(`http://localhost:3001/books/${searchId}`)
            .then(response => response.json())
            .then(data => {
                setSearchResult(data);
            });
    };


    return (
        <>
            <h1>Book list</h1>
            <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
            <button onClick={handleReadById}>Read by ID</button>
            <button onClick={handleReadAll}>Read all</button>

            {searchResult && (
                <div>
                    <h2>Search Result</h2>
                    <p>ID: {searchResult.id}</p>
                    <p>Title: {searchResult.title}</p>
                    <p>Author: {searchResult.author}</p>
                    <p>Rating: {searchResult.rating}</p>
                    <p>Year published: {searchResult.year_published}</p>
                </div>
            )}

            <table>
                <thead>
                    <tr>
                        <th><span style={{ color: 'black' }}>ID</span></th>
                        <th><span style={{ color: 'red' }}>Title</span></th>
                        <th><span style={{ color: 'green' }}>Author</span></th>
                        <th><span style={{ color: 'blue' }}>Rating</span></th>
                        <th><span style={{ color: 'lightblue' }}>Year published</span></th>
                        <th>Update button</th>
                        <th>Delete button</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td style={{ color: 'black' }}>{book.id}</td>
                            <td style={{ color: 'red' }}>{book.title}</td>
                            <td style={{ color: 'green' }}>{book.author}</td>
                            <td style={{ color: 'blue' }}>{book.rating}</td>
                            <td style={{ color: 'lightblue' }}>{book.year_published}</td>
                            <td><button>Update book</button></td>
                            <td><button id={book.id} onClick={handleDelete}>Delete book</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {searchResult && (
                <div>
                    <h2>Search Result</h2>
                    <p>ID: {searchResult.id}</p>
                    <p>Title: {searchResult.title}</p>
                    <p>Author: {searchResult.author}</p>
                    <p>Rating: {searchResult.rating}</p>
                    <p>Year published: {searchResult.year_published}</p>
                </div>
            )}
        </>
    )
}