import React, { useState, useEffect } from "react";
import img from "./maxresdefault.jpg";
import pythoncourse from "./python-course.jpg";
import Cprogram from "./Cprogram.jpg";
import CourseDetails from "./CourseDetails";

function CourseList() {
  const [purchased, setPurchased] = useState();
  const [courses, setCourse] = useState([
    {
      id: 1,
      CourseDetails: "Java",
      Price: 10,
      image: img,
      Rate: "Rating :3",
    },
    {
      id: 2,
      CourseDetails: "Python",
      Price: 50,
      image: pythoncourse,
      Rate: "Rating :2",
    },
    {
      id: 3,
      CourseDetails: "C",
      Price: 70,
      image: Cprogram,
      Rate: "Rating :5",
    },
    {
      id: 4,
      CourseDetails: "React",
      Price: 15,
      image: Cprogram,
      Rate: "Rating :5",
    },
  ]);
  const [datavalue, setDatavalue] = useState(false);

 
  useEffect(() => {
    console.log("You have entered into the datavlaue");
    console.log(datavalue);
  }, []);
  const deleteCourse = (id) => {
    console.log("button clicked");
    const newcourse = courses.filter((course) => course.id !== id);
    setCourse(newcourse);
  };

  courses.sort((x, y) => x.Price - y.Price);

  const handlelData = () => {
    setDatavalue(true);
    console.log(setDatavalue);
  };

  const filteredCourses = courses.filter((course) => course.Price >= 10);
  return (
    <>
      <div>
        {filteredCourses.map((course, id) => (
          <CourseDetails
            key={course.id}
            CourseDetails={course.CourseDetails}
            Price={course.Price}
            image={course.image}
            Rate={course.Rate}
            show={true}
            deleteCourse={deleteCourse}
            id={course.id}
          />
        ))}
      </div>
      <button onClick={handlelData}>DataSubmit</button>
    </>
  );
}

export default CourseList;
