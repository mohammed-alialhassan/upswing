import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import CandlestickGraphChart from './StockGraphs/CandlestickChart';
import AreaChart from './StockGraphs/AreaChart';



export default function Stocks() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, choose a graph below</Typography>
        <AreaChart />
        <CandlestickGraphChart />
        </Box>
      </Container>
    </Page>
  );
}

// import {
//   AppTasks,
//   AppNewUsers,
//   AppBugReports,
//   AppItemOrders,
//   AppNewsUpdate,
//   AppWeeklySales,
//   AppOrderTimeline,
//   AppCurrentVisits,
//   AppWebsiteVisits,
//   AppTrafficBySite,
//   AppCurrentSubject,
//   AppConversionRates
// } from '../components/_dashboard/app';

// ----------------------------------------------------------------------
