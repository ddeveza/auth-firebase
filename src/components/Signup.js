import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Avatar, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@material-ui/core";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  //style
  const avatarStyle = { backgroundColor: "rgb(66, 133, 244)", margin: "10px" };
  const paperStyle = { padding: 20, height: "50vh", width: "30vw", margin: "40px auto" };
  const btnstyle = { margin: "8px 0", height: "49px", backgroundColor: "rgb(66, 133, 244)" };
  //end of style

  return (
    <>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" className="mb-3">
          <Avatar style={avatarStyle}>
            <DriveFileRenameOutlineIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" style={btnstyle}>
              Sign up
            </Button>
          </div>
        </Form>
        {error && <Alert variant="danger">{error}</Alert>}
      </Paper>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
