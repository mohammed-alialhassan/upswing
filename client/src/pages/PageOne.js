import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import lazySizes from 'lazysizes';

// material
import { Box, Grid, Container, Typography } from '@mui/material';
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
      <h2> Knowledge of The Market, In The Palm of Your Hand!</h2>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          <h4>How TO Get Started</h4>
        </Typography>
        <div>
          <Instructions />
        </div>
        <Typography gutterBottom>
          Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod
          ligula urna in dolor. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Phasellus blandit leo
          ut odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id
          purus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In consectetuer turpis ut velit.
          Ae an posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
          Vestibulum suscipit nulla quis orci. Nam commodo suscipit quam. Sed a libero.

          ^In case you missed that, Upswing aims to give you exactly that. Just choose a stock and the app will not only display its price and spec but also
          predict the future?!!
        </Typography>
      </Container>
    </Page>
  );
}


