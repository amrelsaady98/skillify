import {NavLink, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import './navbar.css'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Button} from "@mui/material";

const Navbar = () => {

  const {t, i18n} = useTranslation();
  const [showNavbar, setShowNavbar] = React.useState(false);
  const {userItem, isLoggedIn, isAdmin} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger/>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">{t('navbar.home')}</NavLink>
            </li>
            <li>
              <NavLink to="/search">{t('navbar.search')}</NavLink>
            </li>

            {
              isAdmin &&
              <li>
                <NavLink to="/dashboard">{t('navbar.dashboard')}</NavLink>
              </li>
            }
            {
              !isLoggedIn ?
                <li>
                  <NavLink to="/login">{t('navbar.login')}</NavLink>
                </li>
                :
                <li>
                  <NavLink to="/profile">{t('navbar.profile')}</NavLink>
                </li>
            }
            <Button
              sx={{
                mx:'4rem'
              }}
              onClick={()=>{
                i18n.language === 'en' ?
                  i18n.changeLanguage('ar') :
                  i18n.changeLanguage('en')
              }}
            >
              {i18n.language === 'en' ? 'ar' : 'en'}
            </Button>
          </ul>
        </div>

      </div>

    </nav>
  );
};

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

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onClick={() => {
        navigate('/')
      }}
    >
      <img
        style={{
          borderRadius: '50%',
          height: '3rem',
          width: '3rem',
          margin: '1rem',
        }}
        src={require('assets/images/logos/website_logo.png')}/>
      <Typography>
        S K I L L I F Y
      </Typography>
    </Box>
  );
};

export default Navbar;

