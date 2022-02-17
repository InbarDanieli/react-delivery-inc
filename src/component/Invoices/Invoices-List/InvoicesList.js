import React, { useContext } from 'react'
import UserContext from '../../../userContext';
import {PriceSum, WeightSum} from "../utils"


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function InvoicesList() {
  const {packages, customers } = useContext(UserContext)
  

  return (
    <div>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Total Weight</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((row, index) => {
              return (
                <TableRow key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{PriceSum(row.id, packages)}</TableCell>
                  <TableCell>{WeightSum(row.id, packages)}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>


    </div>
  )
}

export default InvoicesList