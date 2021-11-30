import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Button, Container, Stack, Typography } from '@mui/material';
// components

import Page from '../components/Page';
import {  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates} from '../components/_dashboard/app';


// ----------------------------------------------------------------------
/*
const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];
 */
// ----------------------------------------------------------------------

export default function Landing() {
  return (
    <Page title="Upswing | Dashboard">
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h2">
          <h2>Hi, Welcome back to Upswing</h2>
          </ Typography>
     </Box>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

        </Grid>

        <div>
          <h3>
            <b> Knowledge of The Market, At The Palm of Your Hands!</b>
          </h3>
        </div>
        <Typography variant="body2">
                  <h3>Upswing aims to give you exactly that. Just choose a stock and the app will not only display its price and spec but also
                predict the future?!!
                </h3>
        </Typography>
                <div>
                    <a href="http://localhost:3000/login">Click to Get Started!</a>
                </div>
    </Container>
  </Page>
  );
}
