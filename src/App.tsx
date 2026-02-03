import React from 'react'

import {
  Box,
  Button,
  Grid,
  Paper,
  Typography
} from '@mui/material'

import { deepOrange } from '@mui/material/colors'

const App = () => {
  let name = "Amier - Codehouserqwerqwerqwerqew"
  let message = "Hello"
  let cities = [
    "Boston",
    "New York",
    "Mountain View",
    "Columbus",
    "Denver",
    "Pleasanton"
  ]
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }} >
        <Paper elevation={2}
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            padding: "5rem 0rem"
          }}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <Button variant="contained" sx={{ width: "100%" }}>
                Click me
              </Button>
            </Grid>
            <Grid size={5}>
              <Button variant="contained" sx={{ width: "100%" }} >
                Click me too
              </Button>
            </Grid>
            <Grid size={7}>
              <Button variant="contained" sx={{ width: "100%" }} >
                Click me also
              </Button>
            </Grid>
            {cities.map(city => (
              <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography>{city}</Typography>
                  <Button variant="contained" href={`https://www.google.com/search?q=${city}`} sx={{ width: "100%" }} >
                    Learn more
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box >
    </>
  )
}

export default App