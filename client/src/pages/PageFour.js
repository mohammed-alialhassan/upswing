// material
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import AreaDaily from '../layouts/dashboard/charts/AreaDaily'
// ----------------------------------------------------------------------

export default function PageFour() {
  const { themeStretch } = useSettings();

  return (
    <Page title="UpSwing | Stocks Page">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Stocks
        </Typography>
        <AreaDaily />
      </Container>
    </Page>
  );
}
