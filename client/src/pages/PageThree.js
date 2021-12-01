// material
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import AreaDaily from '../layouts/dashboard/charts/AreaDaily'
import AreaWeekly from '../layouts/dashboard/charts/AreaWeekly';

// ----------------------------------------------------------------------

export default function PageThree() {
  const { themeStretch } = useSettings();

  return (
    <Page title="UpSwing | Page Two">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Stocks
        </Typography>
        <AreaDaily />
      </Container>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Stocks
        </Typography>
        <AreaWeekly />
      </Container>
    </Page>
  );
}
