// material
import { Container, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
// hooks
import ButtonAnimate from '../components/animate/ButtonAnimate';
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import Mission from '../components/missionStatement';

import OutlinedCard from '../components/Card';

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettings();

  return (
    <ContentStyle title="UpSwing | About Us Page">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
         <h4> OUR STORY </h4>
                  </Typography>
                  <ButtonAnimate>
                    <OutlinedCard />
                    </ButtonAnimate>

        <Typography gutterBottom>
          <br />
          Founded in 2021, UpSwing come a long way
          from its beginnings as just an idea!
          When the 3 first started out, their passion for innovation and accessibility drove them to find a way to make
          expert level market information, open to all. This was the impetus to turn hard work and inspiration into to a reliable and user-friendly investing resource.
          All over the world, people are taking advantage Upswing and consumers are thrilled to not only be making profit off the AI but also learning about
          the market and its MANY trends.
        </Typography>
        <br />
        <Typography>
          <h2> OUR MISSION </h2>
          Our team has put in many hours and sleepless nights into research. Not only to make our app work
            but also who may need it the most? Whether you're in the prime of your life or just entering life after
            highschool, <b> Upswing aims to bring "PACE" </b>
            <br />
            <div>
              <Mission />
              </div>
        </Typography>
      </Container>
    </ContentStyle>
)}
