// src/pages/Tasks.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import TaskList from '../components/TaskList';

const Tasks = () => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Your Tasks
      </Typography>
      <TaskList />
    </Container>
  );
};

export default Tasks;
