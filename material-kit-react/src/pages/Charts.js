import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import LineChartMonthly from '../components/_charts/LineChartMonthly';

export default function Stocks() {

  // import { setTicker } = useContext(searchContext);

  return (
    <Page title="Upswing | Charts">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Daily Weekly Monthly Options</Typography>
          <LineChartMonthly />
        </Box>
      </Container>
    </Page>
  );
}
