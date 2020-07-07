import React from 'react';
import './Courses.css';
import CourseCard from './CourseCard';
import CourseData from './CourseData.json';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: CourseData,
    };
  }

  render() {
    const { courses } = this.state;
    const showCourses = courses.filter((course) => course.isDisplayed === true);
    return (
      <div>
        <div className="course-div">
          <h2 className="course-title">Courses</h2>
        </div>
        <div className="courses-div">
          {showCourses.map((courses) => (
            <CourseCard {...courses} key={courses.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Courses;
