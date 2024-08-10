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


function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<WithNav/>}>
              <Route path="/" element={<HomePage/>} />
              <Route path="/course/:id" element={<CourseDetails/>} />
              <Route path="/search" element={<SearchPage/>} />
            </Route>
            <Route element={<WithOutNav/>}>
              <Route path="/dashboard" element={<Admindashboard />} />
              <Route path="/Login" element={<LoginInfo />} />
              <Route path="/Register" element={<RegisterInfo />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;

function WithNav()
{
  return(
    <>
      <DefaultNavbar routes={[]}/>
      <Outlet/>
    </>
  )
}

function WithOutNav()
{
  return(<Outlet/>)
}



