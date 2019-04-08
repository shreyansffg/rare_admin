import TextField from "@material-ui/core/TextField";
import React from "react";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function asyncValidate(values /*, dispatch */) {
  await sleep(1000); // simulate server latency
  if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
    throw { email: 'Email already Exists' };
  }
});


{/*<TextField*/}
{/*  error*/}
{/*  id="standard-error"*/}
{/*  label="Error"*/}
{/*  defaultValue="Hello World"*/}
{/*  className={classes.textField}*/}
{/*  margin="normal"*/}
{/*/>*/}
