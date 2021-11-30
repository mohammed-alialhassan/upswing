import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import LineChartDaily from '../components/_stocks/LineChartDaily';




export default function Stocks() {
  return (
    <Page title="Upswing | Charts">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">heh</Typography>
          <LineChartDaily />
        </Box>
      </Container>
    </Page>
  );
}
