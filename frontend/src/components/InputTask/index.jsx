import React from 'react';
import { Button, H1, Input, Label, Main } from './styled';
import useTasks from '../../hooks/useTasks'

const InputTask = () => {
  const { name, handleChange, createTask } = useTasks();

  return (
    <Main>
      <H1>Tarefas Ebytr</H1>
      <Label>
        Nome da Tarefa
        <Input 
          type="text"
          value={ name }
          onChange={ handleChange }
          />
      </Label>
      <Button
        type='button'
        onClick={ () => createTask() }
      >
        OK
      </Button>
    </Main>
  )
}

export default InputTask;