import React from 'react';
import { InputTask } from '../components';
import TaskList from '../components/TaskList';

const MainPage = () => (
  <div>
    <InputTask />
    <TaskList />
  </div>
);

export default MainPage;