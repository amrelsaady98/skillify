import { createActions } from 'redux-create-actions';

const actions = createActions({
  FETCH_COURSES: () => ({ type: 'FETCH_COURSES' }),
  CREATE_COURSE: (course) => ({ type: 'CREATE_COURSE', course }),
  UPDATE_COURSE: (course) => ({ type: 'UPDATE_COURSE', course }),
  DELETE_COURSE: (id) => ({ type: 'DELETE_COURSE', id }),
});

export default actions;