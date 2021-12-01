// material
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettings();

  return (
    <Page title="UpSwing | About Us Page">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h2" component="h1" paragraph>

Our Story                  </Typography>
        <Typography gutterBottom>
          in [year] b2021 UpSwingong way from its
           beginnings in a [stas just an idea!t
          ore fthe 3tarted out, his/her their for [passioninnovation and accessibility m to [themion,find a way to make
          expert level market information, open to all. This wasetus to turn hard work and inspiration into to a booming online store. We now s
          erve customers all over [place, ie: the US, the world, the Austin area], and are thrilled to be a part of the [adjecti
          ve, ie: quirky, eco-friendly, fair trade] wing of the [industry type, ie: fashion, baked goods, watches] industry.        </Typography>
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
