import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import favCourseReducer from "./favCourseReducer";
import searchCoursesReducer from "./searchCoursesReduser";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
  courses: coursesReducer,
  favCourses: favCourseReducer,
  searchCourses: searchCoursesReducer,
  auth: authReducer,

});

export default rootReducer;
