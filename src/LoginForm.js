import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function LoginForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Username" variant="outlined" size="small" />
      <TextField label="Password" variant="outlined" size="small" />
      <Button variant="contained" color="primary">
        Log In
      </Button>
    </form>
  );
}
