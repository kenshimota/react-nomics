import React from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons"

const useStyles = makeStyles({
  input: {
    backgroundColor: "#fff",
  }
});


const SearchInput = function(){
  const classes = useStyles();

  return (
    <TextField 
      label = 'Buscar' 
      variant = 'filled'
      className = {classes.input}
    >
    </TextField>
  );
};

export default SearchInput;
