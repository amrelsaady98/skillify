import { createReducer } from 'redux-create-reducer';

const initialState = {
  courses: [],
};

const coursesReducer = createReducer(initialState, {
  FETCH_COURSES: (state, action) => {
    return { ...state, courses: action.courses };
  },
  CREATE_COURSE: (state, action) => {
    return { ...state, courses: [...state.courses, action.course] };
  },
  UPDATE_COURSE: (state, action) => {
    const index = state.courses.findIndex((course) => course.id === action.id);
    if (index !== -1) {
      state.courses[index] = action.course;
    }
    return { ...state };
  },
  DELETE_COURSE: (state, action) => {
    return { ...state, courses: state.courses.filter((course) => course.id !== action.id) };
  },
});

export default coursesReducer;