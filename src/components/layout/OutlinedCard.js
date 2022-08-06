import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const card = (
  <CardContent>
    <Typography variant="h5">
      Hi Sherin , Welcome to MyCare dashboard
    </Typography>
    <Typography variant="h5">User Name : Sherin</Typography>
    <Typography variant="h5">Email : asdsad@gmail.com</Typography>
  </CardContent>
)

export default function OutlinedCard() {
  return (
    <Card variant="outlined" style={{ margin: '10px' }}>
      {card}
    </Card>
  )
}
