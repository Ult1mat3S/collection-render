import { course as courseArray } from "../main";

const Course = ({ course }) => {
  const test = course.map((coursepart) => coursepart.name);
  console.log(test);

  const arrayParts = courseArray[0].parts.map((part) => part.exercises);

  let exercisesTotal = arrayParts.reduce((accumulator, currentValue) => {
    let exercisesSum = accumulator + currentValue;
    return exercisesSum;
  });

  // const nodeJsArray = courseArray[1].parts.map((part) => part.exercises);
  // let exercisesTotal1 = nodeJsArray.reduce((accumulator, currentValue) => {
  //   let exercisesSum1 = accumulator + currentValue;
  //   return exercisesSum1;
  // });

  return (
    <div>
      {course[0].parts.map((courses) => (
        <p key={courses.id}>
          {courses.name}: {courses.exercises}
        </p>
      ))}

      <p>Total exercises: {exercisesTotal}</p>

      {/* <h2>{course[1].name}</h2>
      {course[1].parts.map((courses) => (
        <p key={courses.id}>
          {courses.name}: {courses.exercises}
        </p>
      ))}

      <p>Total exercises: {exercisesTotal1}</p> */}
    </div>
  );
};

export default Course;
