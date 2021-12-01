import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import lazySizes from 'lazysizes';

// material
import { Box, Grid, Container, Typography } from '@mui/material';
import dashboardGraphs from '../components/dashCharts';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import Instructions from '../components/instructions'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'company', headerName: 'Company', width: 130 },
  { field: 'ticker', headerName: 'Ticker', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'company') || ''} ${params.getValue(params.id, 'ticker') || ''
      }`,
  },
];

const rows = [
  { id: 1, ticker: 'AAPL', company: 'Apple' },
  { id: 2, ticker: 'AMZN', company: 'Amazon' },
  { id: 3, ticker: 'AMC', company: 'AMC' },
  { id: 4, ticker: 'Stark', company: '' },
  { id: 5, ticker: 'Targaryen', company: 'Daenerys' },
  { id: 6, ticker: 'Melisandre', company: 'Googl' },
  { id: 7, ticker: 'Clifford', company: 'Ferrara' },
  { id: 8, ticker: 'Frances', company: 'Rossini' },
  { id: 9, ticker: 'NVDA', company: 'Nvidia' },
];

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettings();

  return (
    <Page title="UpSwing | Page One">
     <h2> How TO Get Started </h2>
      <Instructions />
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          <br />
          <h4>Benefits of Upswing</h4>
        </Typography>
        <br />
        <Typography gutterBottom>
          Upswing aims to give you exactly that. Just choose a stock and the app will not only display its price and spec but also
          predict the future?!!
ALL IT TAKES is one ticker of the company you're looking to get insight on and let us do the rest!
          With Tensorflow machine-learning, our app is set to take the daily, weekly, and monthly stock prices and predict its future
          through a highly researched and tested algorithm. This makes it easier for beginners in investment who don't have real expertise
          and even well-experenced investors that want to check for reassurance the trends of the stock and market they search up!        </Typography>
      </Container>
    </Page>
  );
}



