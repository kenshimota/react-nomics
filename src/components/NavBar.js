import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SearchInput from "./SearchInput";

const NavBar = function(){

  return (
    <AppBar 
      color = 'primary' 
      position = 'fixed'
    >
      <Toolbar variant = 'dense'>
        <Typography variant = 'h6' >
          Jess - Images
        </Typography>
        <SearchInput />
      </Toolbar>
    </AppBar>
  )
};

export default NavBar;
