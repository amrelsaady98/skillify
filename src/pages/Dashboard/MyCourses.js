import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, addCourse, updateCourse, deleteCourse } from '../redux/coursesSlice';
import { Box, TextField, Button, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const MyCourses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [courseName, setCourseName] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleAddCourse = () => {
    dispatch(addCourse({ name: courseName }));
    setCourseName('');
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse({ ...editingCourse, name: courseName }));
    setCourseName('');
    setEditingCourse(null);
  };

  const handleDeleteCourse = (courseId) => {
    dispatch(deleteCourse(courseId));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>My Courses</Typography>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <TextField
          label="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={editingCourse ? handleUpdateCourse : handleAddCourse}>
          {editingCourse ? 'Update Course' : 'Add Course'}
        </Button>
      </Box>
      <List>
        {courses.map((course) => (
          <ListItem key={course.id} secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={() => { setCourseName(course.name); setEditingCourse(course); }}>
                <Edit />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteCourse(course.id)}>
                <Delete />
              </IconButton>
            </>
          }>
            <ListItemText primary={course.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MyCourses;
