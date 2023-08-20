import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const addName = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    const isNameInArray =
      persons.find((el) => {
        return el.name === newName;
      }) !== undefined;

    if (isNameInArray === true) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
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
      <Persons persons={persons} searchFilter={searchFilter} />
    </div>
  );
};

export default App;
