import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Button, Box, Container, Typography, Link } from '@mui/material';
//
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { varFadeInDown, varFadeInUp, MotionInView } from '../../animate';
// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  paddingBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    paddingBottom: 0,
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {
  const navigate = useNavigate();
  const handleClick = navigate('/dashboard/one', { replace: true });

  return (
    <Container maxWidth="lg">
      <ContentStyle>
        <MotionInView
          variants={varFadeInUp}
          sx={{
            mb: { xs: 3, md: 0 }
          }}
        >
          <motion.div animate={{ y: [-20, 0, -20] }} transition={{ duration: 4, repeat: Infinity }}>
            <Box component="img" alt="rocket" src="/static/home/rocket.png" sx={{ maxWidth: 460, width: 1 }} />
          </motion.div>
        </MotionInView>

        <Box
          sx={{
            pl: { md: 10 },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 5 }}>
            <Typography variant="h2">
              Join or login with
              <br /> UpSwing today!
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Button
              size="large"
              type="button"
              variant="contained"
              target="_blank"
              to="/login"
              component={RouterLink}
              sx={{
                whiteSpace: 'nowrap',
                boxShadow: (theme) => theme.customShadows.z8,
                color: (theme) => theme.palette.getContrastText(theme.palette.common.white),
                bgcolor: 'common.white',
                '&:hover': { bgcolor: 'grey.300' }
              }}
            >
              Login
            </Button>
          </MotionInView>
        </Box>
      </ContentStyle>
    </Container>
  );
}
