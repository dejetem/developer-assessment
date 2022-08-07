import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import '../style/Home.css';
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
         <Typography variant="h6" color="inherit" component="div">
            <IconButton>
             <Link to="/" className='next'>
              <HomeIcon />
              </Link>
            </IconButton>
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            <IconButton>
              <Link to="/cart" className='next'>
              <ShoppingBasketIcon />
              </Link>
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
