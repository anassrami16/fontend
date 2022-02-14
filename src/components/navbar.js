import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class Navbar extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Finbenevolat
            </Typography>
            <Button color="inherit">Connexion</Button>

            <Button color="inherit">Insription</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navbar;
