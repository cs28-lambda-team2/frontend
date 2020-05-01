import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavBar = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState("SignUP");

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setValue("LOGOUT");
    }
  });
  const buttonAction = (e) => {
    e.preventDefault();
    if(value==="LOGOUT"){
      localStorage.removeItem("Token")
      

    }
  };
  console.log("I am props from nav", props.navButton);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Calm Reaches
          </Typography>
          <Button color="inherit" onClick={buttonAction}>{value}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    navButton: state.useReducer.navButton,
  };
}
export default connect(mapStateToProps, {})(NavBar);
