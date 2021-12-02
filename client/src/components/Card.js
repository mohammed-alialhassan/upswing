import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '1px', transform: 'scale(0.4)' }}
  >
    •
  </Box>
);

const card = (
    <><CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Word of the Day
    </Typography>
    <Typography variant="h5" component="div">
      up{bull}swing
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      noun
    </Typography>
    <Typography variant="body2">
      the app you need to <b>NEED</b> to get the most
      out of investing.
      <br />
      '"Upswing makes investing a breeze!"'
    </Typography>
  </CardContent><CardActions>
      <Button size="small">Learn More</Button>
    </CardActions></>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
