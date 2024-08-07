// reducers.js
import {FETCH_COURSES_FAILURE, FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS} from "../actions/coursesActions";

const initialState = {
  data: [],
  isLoading: true,
  error: null
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      // console.log('Fetching courses ', action.payload);
      return { ...state, isLoading: true, error: null };
    case FETCH_COURSES_SUCCESS:
      // console.log('Fetching courses success', action.payload);
      return { ...state, data: action.payload, isLoading: false };
    case FETCH_COURSES_FAILURE:
      // console.log('Fetching courses faliare', action.payload);
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default coursesReducer;
