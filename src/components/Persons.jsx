const Persons = ({ persons, searchFilter }) => {
  const contactsToShow = persons.filter((person) => person.name.toLowerCase().includes(searchFilter.toLowerCase()));

  return (
    <>
      {contactsToShow.map((person) => (
        <p key={person.name}>
          {person.name} - {person.number}
        </p>
      ))}
    </>
  );
};

export default Persons;
