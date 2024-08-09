import DefaultNavbar from "../../components/DefaultNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../home/home_page";
import CourseDetails from "../CourseDetails/CourseDetails";
import LoginInfo from "../LoginPage/LoginPage";
import RegisterInfo from "../RegisterPage/RegisterPage";
import NotFound from "../NotFound/NotFound";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../../assets/theme";
import SearchPage from "../SearchPage/SearchPage";
import Box from "@mui/material/Box";

export default function Presentation(){
  return(
    <>
      <DefaultNavbar routes={[{name:'home', link:'/'}, {name:'Search', link:'/search'}]}/>

      <Box>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/course/:id" element={<CourseDetails/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Box>
    </>
  );
}