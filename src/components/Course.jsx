import { course as courseArray } from "../main";

const Course = ({ course }) => {
  const arrayParts = courseArray[0].parts.map((part) => part.exercises);
  let exercisesTotal = arrayParts.reduce((accumulator, currentValue) => {
    let exercisesSum = accumulator + currentValue;
    return exercisesSum;
  });

  return (
    <div>
      {course[0].parts.map((courses) => (
        <p>
          {courses.name}: {courses.exercises}
        </p>
      ))}

      <p>Total exercises: {exercisesTotal}</p>
    </div>
  );
};

export default Course;
