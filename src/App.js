import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import HomePage from "./pages/home/home_page";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import LoginInfo from "./pages/LoginPage/LoginPage";
import RegisterInfo from "./pages/RegisterPage/RegisterPage";
import NotFound from "./pages/NotFound/NotFound";
import theme from "./assets/theme";

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/*<Navbar />*/}
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/course" element={<CourseDetails/>} />
            <Route path="/Login" element={<LoginInfo />} />
            <Route path="/Register" element={<RegisterInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
