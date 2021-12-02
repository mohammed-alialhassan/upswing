import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import lazySizes from 'lazysizes';

// material
import { Box, Grid, Container, Typography } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';

// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'company', headerName: 'Company', width: 140 },
  { field: 'ticker', headerName: 'Ticker', width: 130 },
  {
    field: 'price',
    headerName: 'Price (USD)',
    width: 150,
  },
  {
    field: 'trending',
    headerName: 'Trending',
    width: 150,
  },
];

const rows = [
  { id: 1, ticker: 'AAPL', company: 'Apple', price: '162.84', trending: 'up'},
  { id: 2, ticker: 'AMZN', company: 'Amazon', price: '3,436.28', trending: 'up'},
  { id: 3, ticker: 'AMC', company: 'AMC', price: '29.38', trending: 'down'},
  { id: 4, ticker: 'DAL', company: 'Delta Airlines', price: '36.04', trending: 'down'},
  { id: 5, ticker: 'FB', company: 'Meta', price: '307.95', trending: 'down'},
  { id: 6, ticker: 'Gme', company: 'Gamestop', price: '178.26', trending: 'up'},
  { id: 7, ticker: 'Googl', company: 'Google', price: '2,857.03', trending: 'neutral'},
  { id: 8, ticker: 'MCD', company: 'McDonalds', price: '249.01', trending: 'neautral'},
  { id: 9, ticker: 'NVDA', company: 'Nvidia', price: '320.09', trending: 'down'},
  { id: 10, ticker: 'PPSL', company: 'Pepsi', price: 'price', trending: 'neautral'},
  { id: 11, ticker: 'TSLA', company: 'Tesla', price: 'price', trending: 'up'},
  { id: 12, ticker: 'WEN', company: 'Wendy', price: 'price', trending: 'neautral'},
  { id: 13, ticker: 'CAR', company: 'Avis Budget Group', price: 'price', trending: 'neautral'},
  { id: 14, ticker: 'IDT', company: 'IDT Corp', price: 'price', trending: 'neautral'},
  { id: 15, ticker: 'NKE', company: 'Nike', price: 'price', trending: 'neautral'},
  { id: 16, ticker: 'AMC', company: 'AMC', price: 'price', trending: 'down'},
  { id: 17, ticker: 'T', company: 'AT&T', price: 'price', trending: 'up'},
  { id: 18, ticker: 'ZM', company: 'Zoom Video Communications', price: 'price', trending: 'neautral'},
  { id: 19, ticker: 'NFLX', company: 'Netflix', price: 'price', trending: 'down'},
  { id: 20, ticker: 'COST', company: 'Costco', price: 'price', trending: 'down'},
  { id: 21, ticker: 'AMD', company: 'Advanced Micro Devices', price: 'price', trending: 'up' }
];
// ----------------------------------------------------------------------

export default function PageSix() {
  const { themeStretch } = useSettings();

  return (
    <Page title="UpSwing | Watchlist Page">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Watchlist
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
        <Typography>
          With our watchlist, new users will be welcomed to a table of what WE believe are
          the stocks to keep an eye on. The trending column will help you determine whether or not
          to close in or wait this dip out.
        </Typography>
      </Container>
    </Page>
  );
}
