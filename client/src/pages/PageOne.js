import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// material
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

/* const columns = [
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
      `${params.getValue(params.id, 'company') || ''} ${
        params.getValue(params.id, 'ticker') || ''
      }`,
  },
];

const rows = [
  { id: 1, ticker: 'AAPL', company: 'Apple' },
  { id: 2, ticker: 'AMZN', company: 'Amazon' },
  { id: 3, ticker: 'AMC', company: 'AMC' },
  { id: 4, ticker: 'Stark', company: '' },
  { id: 5, ticker: 'DAL', company: 'Delta Airlines' },
  { id: 6, ticker: 'GOOGL', company: Google },
  { id: 7, ticker: 'FB', company: 'Meta },
  { id: 8, ticker: 'MCD', company: 'McDonalds' },
  { id: 9, ticker: 'NVDA', company: 'Nvidia' },
]; */

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Page One | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Hi, Welcome To Upswing
        </Typography>

<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>        <Typography gutterBottom>
          Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod
          ligula urna in dolor. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Phasellus blandit leo
          ut odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id
          purus. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In consectetuer turpis ut velit.
          Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
          Vestibulum suscipit nulla quis orci. Nam commodo suscipit quam. Sed a libero.
        </Typography>
        <Typography>
          Praesent ac sem eget est egestas volutpat. Phasellus viverra nulla ut metus varius laoreet. Curabitur
          ullamcorper ultricies nisi. Ut non enim eleifend felis pretium feugiat. Donec mi odio, faucibus at,
          scelerisque quis, convallis in, nisi. Fusce vel dui. Quisque libero metus, condimentum nec, tempor a, commodo
          mollis, magna. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Cras dapibus.
        </Typography>
      </Container>
    </Page>
  );
}
