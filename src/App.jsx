import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "123-456-7890" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>debug: {newName}</div> */}

      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} - {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
