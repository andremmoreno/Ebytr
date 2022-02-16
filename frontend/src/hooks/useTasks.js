import { useState, useEffect } from 'react';
import axios from 'axios';

const useTasks = () => {
  const [name, setName] = useState('')
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const { data } = await axios.get('http://localhost:3001/');

    setTasks(data);
  }

  useEffect(() => {
    fetchTasks();
  }, [tasks])

  // INPUTTASK

  const handleChange = (value) => {
    setName(value.target.value)
  }

  const createTask = async () => {
    axios.post('http://localhost:3001/', {
      name,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setName('')
  }

  const deleteTask = (id) => {
    axios.delete(`http://localhost:3001/${id}`)
  }

  return { name, tasks, handleChange, createTask, deleteTask }
}

export default useTasks;