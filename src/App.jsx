import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import "./index.css";
import personService from "./services/numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const Notification = ({ message }) => {
    if (message === null) {
      return null;
    }

    return <div className="error">{message}</div>;
  };

  const addName = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const existingPersonName = persons.find((el) => el.name === newName);
    const existingPersonNumber = persons.find((el) => el.number === newNumber);

    if (existingPersonName) {
      const confirmMessageName = `${newName} is already added to the phonebook, replace the old number with a new one?`;

      if (window.confirm(confirmMessageName)) {
        updatePerson(existingPersonName.id, newName, newNumber);
      }
    } else if (existingPersonNumber) {
      const confirmMessageNumber = `${newNumber} is already added to the phonebook, replace the old number with a new one?`;

      if (window.confirm(confirmMessageNumber)) {
        updatePerson(existingPersonNumber.id, newName, newNumber);
      }
    } else {
      personService.create(nameObject).then((returnedPerson) => {
        setErrorMessage(`Added ${newName}`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deletePerson = (id) => {
    const filteredPerson = persons.filter((person) => person.id === id);
    const personName = filteredPerson[0].name;
    const personId = filteredPerson[0].id;
    if (window.confirm(`Delete ${personName}?`)) {
      personService.remove(personId);
      // console.log(`${personName} deleted`);
    }
  };

  const updatePerson = (id, name, number) => {
    const updatedPersons = persons.map((person) => (person.id === id ? { ...person, name, number } : person));

    personService.update(id, { name, number }).then(() => {
      setPersons(updatedPersons);
      setErrorMessage(`Updated ${name}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    });
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter value={searchFilter} onChange={handleSearchFilter} />

      <h2>Add New Contact</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Contacts</h2>
      <Persons persons={persons} searchFilter={searchFilter} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
