import React, { useContext, useState } from 'react'
import UserContext from '../../userContext';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';



function CreatePackage() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');

  const { packages, customers, setPackages, pakLength, incPakLength } = useContext(UserContext)

  const [boolName, setBoolName] = useState(false)
  const [boolWeight, setBoolWeight] = useState(false)
  const [boolPrice, setBoolPrice] = useState(false)

  function addPackage() {
    if (!name.length) {
       setBoolName(true)
    }
    if (!weight.toString().length) {
      setBoolWeight(true)
    }
    if (!price.toString().length) {
      setBoolPrice(true)
    }

    if(name.length && weight.toString().length && price.toString().length) {
      setOpen(false)
      setName("")
      setWeight("")
      setPrice("")
      incPakLength()
      setPackages(packages.concat(
        {
          "id": `pak${pakLength}`,
          "weight": `${weight}kg`,
          "customerid": customers.find((customer)=> customer.name === name)?.id,
          "price": price,
          "shippingOrder": pakLength
        })
      );
    }
  }


  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <IconButton onClick={handleClickOpen}

        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <AddIcon />
      </IconButton>

      {open &&
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Package</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please add all the needed information for the deivery
            </DialogContentText>

            <FormControl sx={{ minWidth: 120 }}
              margin="normal"
              fullWidth
              variant="standard"
            >
              <InputLabel id="demo-simple-select-standard-label">Customer Name</InputLabel>
              <Select
                error={boolName}
                value={name}
                onChange={(e) => { setName(e.target.value); setBoolName(false) }}
                label="Customer Name"
              >
                <MenuItem value="">
                  <em>select</em>
                </MenuItem>
                {customers.map((customer, index)=><MenuItem key={index} value={customer.name}>{customer.name}</MenuItem>)}
              </Select>
            </FormControl>

            <TextField
              error={boolWeight}
              onChange={(e) => { setWeight(parseInt(e.target.value)); setBoolWeight(false) }}
              value={weight}
              margin="dense"
              label="weight"
              type="number"
              fullWidth
              variant="standard"
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">kg</InputAdornment>,
              }}
            />
            <TextField
              error={boolPrice}
              onChange={(e) => { setPrice(parseInt(e.target.value)); setBoolPrice(false) }}
              value={price}
              margin="dense"
              label="price"
              type="number"
              fullWidth
              variant="standard"
              required={true}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={addPackage}>Save</Button>
          </DialogActions>
        </Dialog>
      }
    </div>
  )
}

export default CreatePackage