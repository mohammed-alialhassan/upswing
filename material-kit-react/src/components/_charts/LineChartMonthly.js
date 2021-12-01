import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../charts';

// ----------------------------------------------------------------------

const CHART_INPUT = {};

CHART_INPUT.date = [
  '2007-01-09',
  '2007-02-12',
  '2007-03-13',
  '2008-04-14',
  '2008-05-15',
  '2008-06-16',
  '2009-07-19',
  '2009-08-20',
  '2009-09-21',
  '2010-10-22',
  '2010-11-23'
]

const CHART_DATA = [
  {
    // input currency in brackets beside price
    name: 'Price',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }
];

export default function LineChartMonthly() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { curve: 'straight'},
    fill: { type: 'gradient' },
    labels: CHART_INPUT.date,
    xaxis: { type: 'datetime' },
    colors: ['#3487e0'],
    tooltip: {
      enabled: true,
      shared: true,
      followCursor: true,
      theme: "light",
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
      <CardHeader title="Time Series Data (Ticker)" subheader="Monthly" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={450} />
      </Box>
    </Card>
  );
}
