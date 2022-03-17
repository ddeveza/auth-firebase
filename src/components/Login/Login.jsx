import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { login, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("click");
    setError("");
    try {
      await login(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleSignIn();
      navigate("/home");
    } catch (er) {
      console.log(er.message);
    }
  };

  const paperStyle = { padding: 20, height: "60vh", width: "40vw", margin: "40px auto" };
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
        <TextField label="Username" placeholder="Enter username" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
        <TextField label="Password" placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required />
        <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="Remember me" />
        <Button type="button" color="primary" variant="contained" style={btnstyle} fullWidth onClick={handleSubmit}>
          Sign in
        </Button>
        <GoogleButton className="w-100 my-4 flex justify-content-evenly " onClick={handleGoogle} />

        <Typography>
          <Link to="/forgot">Forgot password?</Link>
        </Typography>
        <Typography>{error && <Alert variant="danger">{error}</Alert>}</Typography>
        <div>{console.log(error)}</div>
      </Paper>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
