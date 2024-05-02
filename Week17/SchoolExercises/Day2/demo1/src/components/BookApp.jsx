import React,{useState}from 'react'
import BookList from './BookList'
import '../App.css'
import BookForm from './BookForm'

const BookApp = () => {
  const [updated, setUpdated] = useState(false);

  return (
    <>
    <BookForm updated={updated} setUpdated={setUpdated}/>
    <BookList updated={updated} setUpdated={setUpdated}/>
    </>
  )
}

export default BookApp