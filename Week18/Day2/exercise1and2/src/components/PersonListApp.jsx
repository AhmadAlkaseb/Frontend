import React, {useState} from 'react'
import PersonList from './PersonList'
import PersonInputForm from './PersonInputForm';
import PersonSearch from './PersonSearch';

function PersonListApp() {
  const [updated, setUpdated] = useState(false); 
  const [person, setPerson] = useState({
    age: '',
    fullname: '',
    gender: '',
    email: ''
  });

  const handleUpdatePerson = (updatedPerson) => {
    setPerson(updatedPerson);
  };

  return (
    <div className="container mt-4 mb-4">
        {/* Sets everything nicely in a container with top and bottom margin */}
        <h1 className="row justify-content-center">Welcome to the database of persons in DK</h1>
        {/* Sets the heading in the center */}
        <div className="row justify-content-center mt-4 mb-4">
            {/* Adds margin above and below the component */}
            <PersonSearch />
        </div>
        <div className="row justify-content-center mt-4 mb-4">
            {/* Adds margin above and below the component */}
            <PersonInputForm updated={updated} setUpdated={setUpdated} person={person} setPerson={setPerson} />
        </div>
        <div className="row justify-content-center mt-4 mb-4">
            {/* Adds margin above and below the component */}
            <PersonList updated={updated} setUpdated={setUpdated} person={person} setPerson={setPerson} handleUpdatePerson={handleUpdatePerson} />
        </div>
    </div>
);
}

export default PersonListApp
