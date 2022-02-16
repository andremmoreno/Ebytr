import React from 'react';
import { Main, HList, TableContainerStyled, Btn } from './styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useTasks from '../../hooks/useTasks'

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <Main>
      <HList>Lista</HList>

      <TableContainerStyled component={Paper}>
        <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Tarefa</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Data</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Btn
                    type="button"
                  >
                    Alterar Status
                  </Btn>
                </TableCell>
                <TableCell>
                  <Btn
                    type="button"
                  >
                    Excluir
                  </Btn>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>

    </Main>
  )
}

export default TaskList;