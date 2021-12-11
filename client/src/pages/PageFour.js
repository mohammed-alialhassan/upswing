// material
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import AreaDaily from '../layouts/dashboard/charts/AreaDaily'
import AreaWeekly from '../layouts/dashboard/charts/AreaWeekly'
// ----------------------------------------------------------------------

export default function PageFour() {
  const { themeStretch } = useSettings();

  return (
    <Page title="UpSwing | Stocks Page">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Existing Data
        </Typography>
        <AreaDaily />
      </Container>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Simulated Data
        </Typography>
        <AreaWeekly />
      </Container>
    </Page>
  );
}
