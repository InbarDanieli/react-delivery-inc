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
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CreatePackage from './CreatePackage';


function PackageList() {
  const {packages, customers, setPackages } = useContext(UserContext)

  function DeleteHendler(Id) {
    setPackages(packages.filter((row) => row.id !== Id))
  }

  function handleUp(index) {
    if (index <= 0) {
      return
    }
    packages[index].shippingOrder--;
    packages[index - 1].shippingOrder++;
    setPackages([...packages])
  }
  function handleDown(index) {
    if (index >= packages.length - 1) {
      return
    }
    packages[index].shippingOrder++;
    packages[index + 1].shippingOrder--;
    setPackages([...packages])
  }


  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Price</TableCell>

              <TableCell>

         <CreatePackage/>

              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>

            {packages.sort((a, b) => a.shippingOrder - b.shippingOrder).map((row, index) => {
              return (
                <TableRow key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell >{customers.find(customer => customer.id === row.customerid)?.name}</TableCell>
                  <TableCell >{row.weight}</TableCell>

                  <TableCell >{row.price}</TableCell>
                  <TableCell style={{ display: "flex" }}>
                    <Button onClick={() => DeleteHendler(row.id)} variant="contained">Delete</Button>
                    <Button onClick={() => handleDown(index)}><ArrowDropDownIcon color='inherit' fontSize='large' /></Button>
                    <Button onClick={() => handleUp(index)}><ArrowDropUpIcon color='inherit' fontSize='large' /></Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PackageList