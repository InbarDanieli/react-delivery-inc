import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';



function Header() {

  const [state, setState] = useState(false)
  const toggleDrawer = (open) => () => setState(open)

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mail Delivery Service
            </Typography>

          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}
      >
        <List style={{ width: "200px" }}>
          <Link style={{ textDecoration: "none", color: 'inherit' }} to={"/Packeges"}>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary={"Packages"} />
            </ListItem>
          </Link>

          <Link style={{ textDecoration: "none", color: 'inherit' }} to={"/"}>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary={"Customers"} />
            </ListItem>
          </Link>

          <Link style={{ textDecoration: "none", color: 'inherit' }} to={"/Invoice"}>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText primary={"Invoices"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}

export default Header