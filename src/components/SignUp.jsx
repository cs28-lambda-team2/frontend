import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux"
import { makeStyles } from "@material-ui/core/styles";
import {register} from "../redux/actions"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
    padding:"10px"
      

  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const SignUp=(props) =>{
  const classes = useStyles();
  const [values, setValues] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const handleChanges = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onClickSubmit = (e) => {
    e.preventDefault();
    props.register(values)
  };
  return (
    <Container component="main" className={classes.container}>
      <CssBaseline />
      <div className="pap">

      <Paper className={classes.paper} >
        <Typography component="h1" variant="h4">
          SignUp
        </Typography>
       
<br></br>
                <TextField
                  id="username"
                  label="Username"
                  type="text"
                  name="username"
                  fullWidth
                  onChange={handleChanges}
                  value={values.username}
                  variant="outlined"
                  />
<br></br>           
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  name="password1"
                  fullWidth
                  onChange={handleChanges}
                  value={values.password}
                  autoComplete="current-password"
                  variant="outlined"
                  />
           <br>
           </br>
           <TextField
                  id="filled-password-input"
                  label="Confirm Password"
                  type="password"
                  name="password2"
                  fullWidth
                  onChange={handleChanges}
                  value={values.password}
                  autoComplete="current-password"
                  variant="outlined"
                  />
           <br>
           </br>
                <Button type="submit" onClick={onClickSubmit} variant="contained" color="primary">
                  SignUp
                </Button>
            
            
      </Paper>
                  </div>
    </Container>
  );
}
function mapStateToProps(state){
  return{
    success: state.useReducer.success

  }
}
export default connect(mapStateToProps,{register})(SignUp)