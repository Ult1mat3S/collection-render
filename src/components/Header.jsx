const Header = ({ course }) => {
  // const arrayParts = course[1].parts.map((part) => part.exercises);
  // console.log(`test: ${arrayParts}`);
  // console.log(course[1].parts.map((part) => part.name));

  return (
    <>
      <h1>Web Development Ciriculum</h1>
      <h2>{course[0].name}</h2>
    </>
  );
};

export default Header;
