import React from 'react';
import './Courses.css';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import CourseCard from './CourseCard';
import Course1 from './../../assets/courses/Course1.jpg';
import Course2 from './../../assets/courses/Course2.jpg';
import Course3 from './../../assets/courses/Course3.jpg';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          image: Course1,
          title: 'Product Management Fundamentals',
          description:
            'Find out how to set up an efficient process to get your product out the door.',
          button: 'READ MORE',
          buttonLink:
            'https://productizedemy.teachable.com/p/product-management-fundamentals',
          backgroundColor: 'background-red',
        },
        {
          id: 2,
          image: Course2,
          title: 'Product Management Bootcamp 2020',
          description:
            'Getting into Product Management Online. Learn through high-quality videos, engaging lessons, hands-on activities, and sharing insights.',
          button: 'READ MORE',
          buttonLink: '/courses',
          backgroundColor: 'background-red',
        },
        {
          id: 3,
          image: Course3,
          title: 'What is Product Management',
          description:
            'Organisational function ,new product development, business justification, planning, verification, forecasting, pricing, product launch, and marketing of a product or products at all stages of the product lifecycle.',
          button: 'READ MORE',
          buttonLink: '/courses',
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
