
// Action types
import {callAPI} from "../../apis/callApi";
import axios from "axios";

export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

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


export const fetchCourses = (parameters) => {
  return async (dispatch, getState) => {

    dispatch(fetchCoursesRequest());

    axios.get(`https://66b17fd61ca8ad33d4f44343.mockapi.io/api/v2/courses?${parameters}`)
      .then(response => {
        console.log('fetch courses response', response);
        dispatch(fetchCoursesSuccess(response.data))
      })
      .catch(error => {
        // console.log('fetch courses error', error)
        dispatch(fetchCoursesFailure(error));
      });

  }
}