import React from "react";
import "./Courses.css";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import CourseCard from "./CourseCard";
import CourseData from "./CourseData.json";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: CourseData,
    };
  }

  render() {
    const courses = this.state.courses;
    return (
      <div>
        <NavBar />
        <div className="course-title-div">
          <h1 className="page-title">Courses</h1>
        </div>
        <div className="courses-div">
          {courses.map((courses) => (
            <CourseCard {...courses} key={courses.id} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Courses;
