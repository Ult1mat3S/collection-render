const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addName }) => {
  return (
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
  );
};

export default PersonForm;
