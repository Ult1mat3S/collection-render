const Persons = ({ persons, searchFilter, deletePerson }) => {
  const contactsToShow = persons.filter((person) => person.name.toLowerCase().includes(searchFilter.toLowerCase()));

  return (
    <>
      {contactsToShow.map((person) => (
        <p key={person.name}>
          {person.name} - {person.number}
          <button onClick={() => deletePerson(person.id)}>Delete</button>
        </p>
      ))}
    </>
  );
};

export default Persons;
