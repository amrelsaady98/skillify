import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
import MyCourses from 'pages/Dashboard/MyCourses';

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DefaultNavbar routes={[]}/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/course" element={<CourseDetails/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/Login" element={<LoginInfo />} />
            <Route path="/Register" element={<RegisterInfo />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboard" element={<Admindashboard />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
