import './App.css';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import HomePage from "./pages/home/home_page";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import LoginInfo from "./pages/LoginPage/LoginPage";
import RegisterInfo from "./pages/RegisterPage/RegisterPage";
import NotFound from "./pages/NotFound/NotFound";
import theme from "./assets/theme";
import DefaultNavbar from "./components/DefaultNavbar";
import ProfilePage from 'pages/ProfilePag/ProfilePage';
import SearchPage from "./pages/SearchPage/SearchPage";
import Admindashboard from 'pages/Dashboard/Dashboard';
import Navbar from "./components/Navbar/navbar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentUser, isUserLoggedIn} from "./services/auth_service";
import {userLogin} from "./redux/actions/authActions";

import {Suspense} from "react";
import {useTranslation} from 'react-i18next'

function App() {
  const {t, i18n} = useTranslation();
  const {userItem, isLoggedIn, isAdmin} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  useEffect(() => {
    if (isUserLoggedIn()) {
      dispatch(userLogin(getCurrentUser()));
    }
  }, []);
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
      <Suspense fallback={'...loading'}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route element={<WithNav/>}>
                <Route path="/" element={<HomePage/>} />
                <Route path="/course/:id" element={<CourseDetails/>} />
                <Route path="/search" element={<SearchPage/>} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/dashboard" element={<Admindashboard />} />

              </Route>
              <Route element={<WithOutNav/>}>
                <Route path="/Login" element={<LoginInfo />} />
                <Route path="/Register" element={<RegisterInfo />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </Suspense>
  );
}

export default App;

function WithNav()
{
  return(
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

function WithOutNav()
{
  return(<Outlet/>)
}



