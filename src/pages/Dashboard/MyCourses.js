import React, { useState, useEffect } from 'react';
import { Grid, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

const ViewCourses = () => {
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      setCourses(courses);
    }, [courses]);
  
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">My Courses</Typography>
        </Grid>
        <Grid item xs={12}>
          <Table>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.description}</TableCell>
                  <TableCell>{course.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  };

export default ViewCourses