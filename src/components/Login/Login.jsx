import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import GoogleButton from "react-google-button";

const Login = () => {
  const paperStyle = { padding: 20, height: "50vh", width: "30vw", margin: "40px auto" };
  const avatarStyle = { backgroundColor: "rgb(66, 133, 244)", margin: "10px" };
  const btnstyle = { margin: "8px 0", height: "49px", backgroundColor: "rgb(66, 133, 244)" };
  return (
    <>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label="Username" placeholder="Enter username" fullWidth required />
        <TextField label="Password" placeholder="Enter password" type="password" fullWidth required />
        <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="Remember me" />
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
          Sign in
        </Button>
        <GoogleButton className="w-100 my-4 flex justify-content-evenly " />
        <Typography>
          <Link to="/forgot">Forgot password?</Link>
        </Typography>
      </Paper>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
