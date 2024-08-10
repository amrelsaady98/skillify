import {NavLink} from "react-router-dom";
import React from "react";
import './navbar.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const {userItem, isLoggedIn, isAdmin} = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>

            {
              isAdmin &&
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            }
            {
              !isLoggedIn ?
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                :
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Home = () => <h2>You are in the Home</h2>;
const Blogs = () => <h2>You are in the Blogs</h2>;
const Projects = () => <h2>You are in the Projects</h2>;
const About = () => <h2>You are in the About</h2>;
const Contact = () => <h2>You are in the Contact</h2>;


const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const Logo = () => (
  <Box
    style={{
      display:'flex',
      alignItems:'center',

    }}
  >
    <img
      style={{
        borderRadius:'50%',
        height:'3rem',
        width:'3rem',
        margin:'1rem',
      }}
      src={require('assets/images/logos/website_logo.png')}/>
    <Typography>
      S K I L L I F Y
    </Typography>
  </Box>
);

export default Navbar;

