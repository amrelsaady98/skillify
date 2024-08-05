import DefaultNavbar from "../../components/DefaultNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../home/home_page";
import CourseDetails from "../CourseDetails/CourseDetails";
import LoginInfo from "../LoginPage/LoginPage";
import RegisterInfo from "../RegisterPage/RegisterPage";
import NotFound from "../NotFound/NotFound";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../../assets/theme";

export default function Presentation(){
  return(
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/*<DefaultNavbar routes={[]}/>*/}
          <Routes>
            {/*<Route path="/" element={<HomePage/>} />*/}
            <Route path="/home" element={<HomePage/>} />
            <Route path="/course" element={<CourseDetails/>} />
            {/*<Route path="/Login" element={<LoginInfo />} />*/}
            {/*<Route path="/Register" element={<RegisterInfo />} />*/}
            {/*<Route path="*" element={<NotFound />} />*/}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}