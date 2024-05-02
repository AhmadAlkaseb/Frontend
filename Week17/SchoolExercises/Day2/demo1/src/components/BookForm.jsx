import React, {useState} from 'react'

const BookForm = ({updated, setUpdated}) => {

    const [book, setBook] = useState({
        title: '',
        author: '',
        rating: '',
        year_published: ''
    });

    const handleChange = (event) => {
        setBook({...book, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(book);
        fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book),
        })
        .then((response) => response.json)
        .then(() => {
            console.log('Book added');
            setUpdated(!updated);
            setBook({title: '', author: '', rating: '', year_published: ''});
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={book.title} id={"title"} placeholder="Title" name="title" onChange={handleChange}/>
                <input type="text" value={book.author} id={"author"} placeholder="Author" name="author" onChange={handleChange}/>
                <input type="number" value={book.rating} id={"rating"} placeholder="Rating" name="rating" onChange={handleChange}/>
                <input type="number" value={book.year_published} id={"year_published"} placeholder="Year published" name="yearPublished" onChange={handleChange}/>
                <button type="submit">Add Book</button>
            </form>
        </>
    )
}

export default BookForm
