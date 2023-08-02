import { useState } from "react";

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
  const contactsToShow = persons.filter((person) => person.name.toLowerCase().includes(searchFilter.toLowerCase()));

  const addName = (event) => {
    event.preventDefault();
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

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchFilter = (event) => {
    event.preventDefault();
    setSearchFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        Search: <input type="text" value={searchFilter} onChange={handleSearchFilter} />
      </div>

      <h2>Add New Contact</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <div>
            Number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {contactsToShow.map((person) => (
        <p key={person.name}>
          {person.name} - {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
