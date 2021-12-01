// material
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function PageSix() {
  const { themeStretch } = useSettings();

  return (
    <Page title="UpSwing | Watchlist Page">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Page Six
        </Typography>
        <Typography gutterBottom>
          Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod

        </Typography>
        <Typography>
          Praesent ac sem eget est egestas volutpat. 
        </Typography>
      </Container>
    </Page>
  );
}
