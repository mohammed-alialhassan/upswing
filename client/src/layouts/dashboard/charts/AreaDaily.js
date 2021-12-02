import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { useContext } from 'react';
import BaseOptionChart from './BaseOptionChart';
import GlobalState from '../../../components/GlobalState';

// ----------------------------------------------------------------------

export default function AreaDaily() {
  const [ticker, setTicker] = useContext(GlobalState);
  console.log(ticker)

  //
  const CHART_X = {
    date: []
  }

  //
  const CHART_Y = [
    {
      name: ' Price',
      type: 'area',
      data: []
    }
  ];

  //
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { curve: 'straight'},
    fill: { type: 'gradient' },
    labels: CHART_X.date,
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
      <CardHeader title="Time Series Data (AAPL)" subheader="Daily" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="area" series={CHART_Y} options={chartOptions} height={450} />
      </Box>
    </Card>
  );
}
