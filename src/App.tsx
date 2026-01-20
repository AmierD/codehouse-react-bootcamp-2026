import React from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'

import { deepOrange } from '@mui/material/colors'

const App = () => {
  let name = "Amier"
  let message = "Hello, "
  return (
    <>
      <Grid container spacing={2}>
        <Button variant="contained">Click me</Button>
        <Typography variant="h3" component="h2">
          {message}{name}
        </Typography>
        <TextField>
        </TextField>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      </Grid>
    </>
  )
}

export default App