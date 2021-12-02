import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { useContext } from 'react';
import BaseOptionChart from './BaseOptionChart';
import GlobalState from '../../../components/GlobalState';

// ----------------------------------------------------------------------

const CHART_INPUT = {};
CHART_INPUT.date = [];

const CHART_DATA = [
  {
    // input currency in brackets beside price
    name: 'ticker Price',
    type: 'area',
    data: []
  }
];

const NEW_DATA = [
  {
    // input currency in brackets beside price
    name: 'Simulated AAPL Price (AAPL)',
    type: 'area',
    data: []
  }
];

CHART_DATA[0].data.forEach((value) => {
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

  const newVal = value * getRandomArbitrary(1.05, 0.95)
  NEW_DATA[0].data.push(newVal);
})

export default function AreaWeekly() {
  const [ticker, setTicker] = useContext(GlobalState);
  console.log(ticker)

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { curve: 'straight'},
    fill: { type: 'gradient' },
    labels: CHART_INPUT.date,
    xaxis: { type: 'datetime' },
    tooltip: {
      enabled: true,
      shared: true,
      followCursor: true,
      theme: "dark",
      style: {
        fontSize: '12px'
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: true,
        format: 'dd MMM',
        formatter: undefined,
      },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `$${y.toFixed(0)}`;
          }
          return y;
        }
      },
      marker: {
        show: true,
      },
    },
    grid: {
      show: true,
      borderColor: '#e6e6e6',
      strokeDashArray: 1,
      position: 'back',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 0,
        right: 7,
        bottom: 0,
        left: 7
      },
    },
    chart: {
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 600,
        dynamicAnimation: {
          enabled: true,
          speed: 300
        }
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: true,
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString()
            }
          },
          svg: {
            filename: undefined,
          },
          png: {
            filename: undefined,
          }
        },
        autoSelected: 'zoom'
      },
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
            opacity: 0.4,
            width: 1
          }
        }
      },
    }
  });

  return (
    <Card>
      <CardHeader title="Tensor Flow Time Series Simulated Demo (AAPL)" subheader="Daily" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="area" series={NEW_DATA} options={chartOptions} height={450} />
      </Box>
    </Card>
  );
}
