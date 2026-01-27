import React from 'react'

import {
  Button,
  Box,
  Grid,
  Typography,
  TextField,
  Avatar,
  List,
  ListItem
} from '@mui/material'

import { deepOrange } from '@mui/material/colors'

const App = () => {
  let name = "Amier - Codehouserqwerqwerqwerqew"
  let message = "Hello"
  let cities = [
    "Boston",
    "New York",
    "Mountain View"
  ]
  return (
    <>
      <List>
        { /* dynamically rendering */}
        {cities.map((city) => (
          <ListItem>
            <Typography variant="body1">{city}</Typography>
          </ListItem>
        ))}
        <ListItem>
          <Typography variant="body1">Manually Typed City</Typography>
        </ListItem>
      </List>
      <Button variant="contained" sx={{ bgcolor: "#A0B9BF", px: "8rem", width: "100%" }}>Click me</Button>


      {/* using container elements. applying flex on the parent component */}
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", flexWrap: "wrap", bgcolor: "#A0B9BF", justifyContent: "center", alignItems: "center" }}>
        {/* dynamically rendering components with ternary operator */}
        {message ? <Typography>{message}</Typography> : <Typography>No message</Typography>}
        <Typography variant="h3" component="h2">
          {message}{name}
        </Typography>
      </Box >
    </>
  )
}

export default App