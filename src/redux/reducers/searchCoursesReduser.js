import {
   FIND_COURSE_FAILURE,
  FIND_COURSE_REQUEST, FIND_COURSE_SUCCESS
} from "../actions/coursesActions";

const initialState = {
  resultData: [],
  isLoadingResults: false,
  resultError: null
};

const searchCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_COURSE_REQUEST:
      console.log('finding courses ', action.payload);
      return { ...state, isLoadingResults: true, resultError: null };
    case FIND_COURSE_SUCCESS:
      console.log('finding courses success', action.payload);
      console.log(state)
      return { ...state, resultData: action.payload, isLoadingResults: false };
    case FIND_COURSE_FAILURE:
      console.log('finding courses faliare', action.payload);
      return { ...state, resultError: action.payload, isLoadingResults: false };
    default:
      return state;
  }
};

export default searchCoursesReducer;
