import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/previewsconferences">Previews Conferences</Link>
        </li>
        <li>
          <Link to="/meetups">Meetups</Link>
        </li>
        <li>
          <Link to="/girlswhoproduct">#GirlsWhoProduct</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
