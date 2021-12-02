import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import lazySizes from "lazysizes";

import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// material
import { Box, Grid, Container, Typography } from "@mui/material";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MovingIcon from "@mui/icons-material/Moving";

// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";
import Instructions from "../components/instructions";

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettings();

  return (
    <Page title="UpSwing | Page One">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h3" component="h1" paragraph>
          <h4>Benefits of Upswing</h4>
        </Typography>
        <AnalyticsIcon style={{ height: 200, width: 200 }} />
        <AssignmentIcon style={{ height: 200, width: 200 }} />
        <AttractionsIcon style={{ height: 200, width: 200 }} />
        <AttachMoneyIcon style={{ height: 200, width: 200 }} />
        <MovingIcon style={{ height: 200, width: 200 }} />
        <Box component="span"
    sx={{ display: 'inline-block', mx: '10px', transform: 'scale(1)' }}>
      <Card variant='outlined'>
          <CardContent>
            <Typography gutterBottom>
              Upswing aims to give you exactly that. Just choose a stock and the
              app will not only display its price and spec but also predict the
              future?!! ALL IT TAKES is one ticker of the company you're looking
              to get insight on and let us do the rest! With Tensorflow
              machine-learning, our app is set to take the daily, weekly, and
              monthly stock prices and predict its future through a highly
              researched and tested algorithm. This makes it easier for
              beginners in investment who don't have real expertise and even
              well-experenced investors that want to check for reassurance the
              trends of the stock and market they search up!
            </Typography>
          </CardContent>
          </Card>
        </Box>
        <br />
        <h1> How To Get Started </h1>
        <br />
        <Instructions />
      </Container>
    </Page>
  );
}
