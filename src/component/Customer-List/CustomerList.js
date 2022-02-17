import React, { useContext } from 'react'
import UserContext from '../../userContext';

import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function CustomerList() {
  const { setData, packages, customers } = useContext(UserContext)

  function DeleteHendler(Id) {
    setData({ customers: customers.filter((row) => row.id !== Id), packages: packages.filter((pack) => pack.customerid !== Id) })
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((row, index) => {
              return (
                <TableRow key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell >{row.name}</TableCell>
                  <TableCell >
                    <Link style={{ textDecoration: "none", color: "inherit" }} to={`/invoice/${row.id}`}>
                    <Button variant="contained">Create Invoice</Button>
                  </Link>
                  </TableCell>
                  <TableCell ><Button onClick={() => DeleteHendler(row.id)} variant="contained">Delete</Button></TableCell>
                </TableRow>
              )
            })}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CustomerList