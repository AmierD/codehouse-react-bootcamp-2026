import { React, useState } from 'react'

import {
  Box,
  Button,
  Grid,
  Paper,
  Typography
} from '@mui/material'


const App = () => {
  let cities = [
    "Boston",
    "New York",
    "Mountain View",
    "Columbus",
    "Denver",
    "Pleasanton"
  ]
  const [welcomeOn, setWelcomeOn] = useState(false)
  const [randomCity, setRandomCity] = useState(cities[0])

  const handleClick = (city: string) => {
    window.location.href = `https://www.google.com/search?q=${city}`
  }

  const handleWelcomeClick = () => {
    setWelcomeOn(true)
  }

  const handleRandomCityClick = () => {
    const randomIndex = Math.floor(Math.random() * cities.length)
    const selectedCity = cities[randomIndex]
    setRandomCity(selectedCity)
  }


  return (
    <>
      <Paper sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Button variant="contained" onClick={handleRandomCityClick}>
          Get a random city
        </Button>
        <Typography>The city you chose is {randomCity}</Typography>
        <Button variant="contained" onClick={handleWelcomeClick}>
          Be Welcomed
        </Button>
        <Typography> {welcomeOn ? "Welcome" : "Go Away"}</Typography>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "center" }} >
        <Paper elevation={2}
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            padding: "5rem 0rem"
          }}>
          <Grid container spacing={3}>
            {cities.map(city => (
              <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                  <Typography>{city}</Typography>
                  <Button
                    variant="contained"
                    // href={`https://www.google.com/search?q=${city}`}
                    sx={{ width: "100%" }}
                    onClick={() => handleClick(city)}
                  >
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