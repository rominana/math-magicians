import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>
      <Link to="/home" className="logo">
        Math Magicians
      </Link>
    </h1>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
