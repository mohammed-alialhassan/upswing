import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../charts';

// ----------------------------------------------------------------------

const CHART_INPUT = {};

CHART_INPUT.date = [
  '01/01/2003',
  '02/01/2003',
  '03/01/2003',
  '04/01/2003',
  '05/01/2003',
  '06/01/2003',
  '07/01/2003',
  '08/01/2003',
  '09/01/2003',
  '10/01/2003',
  '11/01/2003'
]

const CHART_DATA = [
  {
    // input currency in brackets beside price
    name: 'Price',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }
];

export default function LineChartDaily() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { curve: 'straight'},
    fill: { type: ['gradient'] },
    labels: CHART_INPUT.date,
    xaxis: { type: 'datetime' },
    tooltip: {
      enabled: true,
      shared: true,
      followCursor: false,
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
      strokeDashArray: 10,
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
        right: 10,
        bottom: 0,
        left: 10
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
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Time Series Data (Ticker)" subheader="Daily" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={450} />
      </Box>
    </Card>
  );
}
