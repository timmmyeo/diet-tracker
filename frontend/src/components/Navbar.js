import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, HashRouter as Router } from "react-router-dom";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div>
              <IconButton
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              > 
              <Router>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                
                ]<Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/dashboard">
                  <MenuItem onClick={handleClose}>Calories</MenuItem>
                </Link>
              </Router>
              </Menu>
              
            </div>
          <Typography variant="h6">
            Diet with MEEEEE
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}