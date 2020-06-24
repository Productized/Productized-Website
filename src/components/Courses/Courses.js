import React from 'react';
import './Courses.css';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import CourseCard from './CourseCard';
import ProdMgmtFundamentals from './../../assets/courses/ProdMgmtFundamentals.jpg';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          image: ProdMgmtFundamentals,
          title: 'Product Management Fundamentals',
          description:
            'Find out how to set up an efficient process to get your product out the door.',
          button: 'READ MORE',
          buttonLink:
            'https://productizedemy.teachable.com/p/product-management-fundamentals',
          backgroundColor: 'background-red',
        },
      ],
    };
  }

  render() {
    const courses = this.state.courses;
    return (
      <div>
        <NavBar />
        <h1 className="page-title">Courses</h1>
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
