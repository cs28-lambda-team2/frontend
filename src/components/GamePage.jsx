import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { initiate, move } from "../redux/actions";
import north from "../images/north.png";
import south from "../images/south.png";
import east from "../images/east.png";
import west from "../images/west.png";
import Loader from "react-loader-spinner";
import Map from './Game/Map.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    marginTop: theme.spacing(10),
    width: "100%",
  },
  control: {
    border: "2px solid red",
    padding: "5px",
    width: "100%",
    margin: "5px",
  },
  dir: {
    display: "flex",
    alignItems: "center",
  },
  map: {
    // border: "10px solid green",
  },
  test: {
    textAlign: "left",
    textDecoration: "underline",
  },
  initiate: {
    padding: "5px",
    width: "100%",
    margin: "5px",
    //   border:"10px solid red"
  },
  loading: {
    height: "40px",
    width:"40px",
    textAlign: "center",

  },
}));
export const GamePage = (props) => {
  const classes = useStyles();
  const [dataInit, setDataInit] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (props.gameOn === true) {
      props.initiate();
      setDataInit(props.data);
      setDisable(true);
    }
  }, [props.track]);

  useEffect(() => {
    setDataInit(props.data);
  }, [props.data]);
  const initiate = (e) => {
    e.preventDefault();
    props.initiate();
  };
  const move = (direct) => {
    props.move({ direction: direct });
    setDataInit(props.data);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={8} className={classes.map}>
            <Map  currentPosition={dataInit.title}/>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
              <Grid item xs={12} sm={12} md={12}>
                <Button
                  fullWidth
                  disabled={disable}
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={initiate}
                >
                  INITIATE
                </Button>
              </Grid>


              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6">PLAYER</Typography>
                <TextField
                  id="player"
                  type="text"
                  name="player"
                  fullWidth
                  value={dataInit.name}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                />{" "}
              </Grid>

              <Paper className={classes.initiate}>
                <Grid item xs={6} sm={6} md={6}>
                  <Typography variant="h6" className={classes.test}>
                    POSITION
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="caption">{dataInit.title}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h6" className={classes.test}>
                    DESCRIPTION
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="caption">{dataInit.description}</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h6">OTHER PLAYER (S)</Typography>
                  <TextField
                    id="activePlayer"
                    type="text"
                    name="player"
                    fullWidth
                    value={dataInit.players}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
              </Paper>
              <Paper className={classes.control}>
                <Grid container spacing={0}>
                  <Grid item xs={6}  sm={6} md={6}>
                    <Grid container spacing={0}>
                      <Grid item xs={4}  sm={4} md={4} className={classes.dir}>
                        <img
                          src={west}
                          alt="west"
                          className="direction-button"
                          onClick={() => move("w")}
                        />
                      </Grid>
                      <Grid item xs={4}  sm={4} md={4}>
                        <Grid container spacing={1}>
                          <Grid item xs={12}  sm={12} md={12} >
                            <img
                              src={north}
                              alt="north"
                              className="direction-button"
                              onClick={() => move("n")}
                            />{" "}
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
              <div className={classes.loading}>
                {props.loading ? <Loader type="Circles" color="#00BFFF" height={40} width={40} /> : ""}
              </div>
                </Grid>
                          <Grid item xs={12}  sm={12} md={12}>
                            <img
                              src={south}
                              alt="south"
                              className="direction-button"
                              onClick={() => move("s")}
                            />{" "}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}  sm={4} md={4} className={classes.dir}>
                        <img
                          src={east}
                          alt="east"
                          className="direction-button"
                          onClick={() => move("e")}
                        />{" "}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}  sm={6} md={6} >
                    <Grid container spacing={2}>
                      <Grid item xs={12}  sm={12} md={12}>
                        <Button variant="outlined" fullWidth color="primary">
                          PICK TREASURE
                        </Button>
                      </Grid>
                      <Grid item xs={12}  sm={12} md={12}>
                        <Button variant="outlined" fullWidth color="secondary">
                          DROP TREASURE
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
  );
};
function mapStateToProps(state) {
  return {
    data: state.useReducer.data,
    track: state.useReducer.track,
    moving: state.useReducer.moving,
    gameOn: state.useReducer.gameOn,
    loading: state.useReducer.loading,
  };
}
export default connect(mapStateToProps, { initiate, move })(GamePage);
