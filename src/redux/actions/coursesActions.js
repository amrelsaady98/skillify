
// Action types
import axios from "axios";

export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const ADD_COURSE_TO_FAV = 'ADD_COURSE_TO_FAV';
export const REMOVE_FAV_COURSE = 'REMOVE_FAV_COURSE';

// Action creators
export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST
});

export const fetchCoursesSuccess = (data) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: data
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error
});

export const addCourseToFav = (courseItem) => ({
  type: ADD_COURSE_TO_FAV,
  payload: courseItem
})

export const removeFavCourse = (courseItem) => ({
  type: REMOVE_FAV_COURSE,
  payload: courseItem,
})


export const fetchCourses = (parameters) => {
  return async (dispatch, getState) => {

    dispatch(fetchCoursesRequest());

    axios.get(`https://66b17fd61ca8ad33d4f44343.mockapi.io/api/v2/courses?${parameters}`)
      .then(response => {
        // console.log('fetch courses response', response);
        dispatch(fetchCoursesSuccess(response.data))
      })
      .catch(error => {
        // console.log('fetch courses error', error)
        dispatch(fetchCoursesFailure(error));
      });

  }
}
