import React from 'react'
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress'
export default function(props) {
  return (
    <Grid container spacing={16} justify="center" alignItems="center">
      <Grid item>
        <CircularProgress />
      </Grid>
      <Grid item>
        {props.msg}
      </Grid>
    </Grid>
  )
}
