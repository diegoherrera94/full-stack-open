import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState({message: null, isError: null});

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response));
  }, [])

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toUpperCase().indexOf(filter.toUpperCase()) > -1);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const updatePerson = person => {
    const changedPerson = {...person, number: newNumber};
    personService
      .update(person.id, changedPerson)
      .then(response => {
        setPersons(persons.map(p => p.id !== person.id ? p : response));
        setNewName('');
        setNewNumber('');
        setMessage({message: `Updated number of ${response.name}`, isError: false});
        setTimeout(() => { setMessage({message: null, isError: null}) }, 5000);
      })
      .catch(error => {
        setMessage({ message: `The person '${person.name}' was already deleted from server`, isError: true});
        setTimeout(() => { setMessage({message: null, isError: null}) }, 5000);
        setPersons(persons.filter(p => p.id !== person.id));
      });
  }

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber
    };

    personService
      .create(personObject)
      .then(response => {
        setPersons([...persons, response]);
        setNewName('');
        setNewNumber('');
        setMessage({message: `Added ${response.name}`, isError: false});
        setTimeout(() => { setMessage({message: null, isError: null}) }, 5000);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const person = persons.find(person => person.name === newName);

    if(person){
      
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)){
        updatePerson(person);
      }

    } else {
      addPerson();
    }
  }

  const handleFilter = (event) => {    
    setFilter(event.target.value);
  }

  const handleDelete = (id) => {
    const personToDelete = persons.filter(p => p.id === id)[0];
    
    if(window.confirm(`Delete ${personToDelete.name} ?`)){
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(error => {
          setMessage({ message: `The person '${personToDelete.name}' was already deleted from server`, isError: true});
          setTimeout(() => { setMessage({message: null, isError: null}) }, 5000);
          setPersons(persons.filter(p => p.id !== id));
        });
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>add a new</h3>
      <PersonForm 
        handleSubmit={handleSubmit}
        handleNumberChange={handleNumberChange}
        handleNameChange={handleNameChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
