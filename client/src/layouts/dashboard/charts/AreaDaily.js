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
  // const [stock, setStock] = useContext(GlobalState);
  // const tickerName = stock[0]
  // console.log(tickerName)
  // console.log(stock[1][`${tickerName}_ts_daily`])
  // console.log(stock[1][`${tickerName}_ts_daily`])

  //
  const CHART_X = {
    date: [
  '2021-07-12',
  '2021-07-12',
  '2021-07-13',
  '2021-07-14',
  '2021-07-15',
  '2021-07-16',
  '2021-07-19',
  '2021-07-20',
  '2021-07-21',
  '2021-07-22',
  '2021-07-23',
  '2021-07-26',
  '2021-07-27',
  '2021-07-28',
  '2021-07-29',
  '2021-07-30',
  '2021-08-02',
  '2021-08-03',
  '2021-08-04',
  '2021-08-05',
  '2021-08-06',
  '2021-08-09',
  '2021-08-10',
  '2021-08-11',
  '2021-08-12',
  '2021-08-13',
  '2021-08-16',
  '2021-08-17',
  '2021-08-18',
  '2021-08-19',
  '2021-08-20',
  '2021-08-23',
  '2021-08-24',
  '2021-08-25',
  '2021-08-26',
  '2021-08-27',
  '2021-08-30',
  '2021-08-31',
  '2021-09-01',
  '2021-09-02',
  '2021-09-03',
  '2021-09-07',
  '2021-09-08',
  '2021-09-09',
  '2021-09-10',
  '2021-09-13',
  '2021-09-14',
  '2021-09-15',
  '2021-09-16',
  '2021-09-17',
  '2021-09-20',
  '2021-09-21',
  '2021-09-22',
  '2021-09-23',
  '2021-09-24',
  '2021-09-27',
  '2021-09-28',
  '2021-09-29',
  '2021-09-30',
  '2021-10-01',
  '2021-10-04',
  '2021-10-05',
  '2021-10-06',
  '2021-10-07',
  '2021-10-08',
  '2021-10-11',
  '2021-10-12',
  '2021-10-13',
  '2021-10-14',
  '2021-10-15',
  '2021-10-18',
  '2021-10-19',
  '2021-10-20',
  '2021-10-21',
  '2021-10-22',
  '2021-10-25',
  '2021-10-26',
  '2021-10-27',
  '2021-10-28',
  '2021-10-29',
  '2021-11-01',
  '2021-11-02',
  '2021-11-03',
  '2021-11-04',
  '2021-11-05',
  '2021-11-08',
  '2021-11-09',
  '2021-11-10',
  '2021-11-11',
  '2021-11-12',
  '2021-11-15',
  '2021-11-16',
  '2021-11-17',
  '2021-11-18',
  '2021-11-19',
  '2021-11-22',
  '2021-11-23',
  '2021-11-24',
  '2021-11-26',
  '2021-11-29',
  '2021-11-30'
]
  };

  // if (tickerName) {
  //   stock[1][`${tickerName}_ts_daily`].forEach(object => {
  //     CHART_X.date.push(object.date)
  //   });
  // }
  //
  const CHART_Y = [
    {
      name: 'Price',
      type: 'area',
      data: [
      '144.07',
      '145.20',
      '148.70',
      '148.04',
      '145.95',
      '142.02',
      '145.71',
      '144.97',
      '146.36',
      '148.12',
      '148.55',
      '146.33',
      '144.55',
      '145.20',
      '145.42',
      '145.09',
      '146.92',
      '146.51',
      '146.62',
      '145.92',
      '145.87',
      '145.38',
      '145.64',
      '148.67',
      '148.88',
      '150.90',
      '149.97',
      '146.14',
      '146.48',
      '147.97',
      '149.49',
      '149.40',
      '148.14',
      '147.32',
      '148.38',
      '152.89',
      '151.60',
      '152.28',
      '153.42',
      '154.07',
      '156.46',
      '154.88',
      '153.84',
      '148.75',
      '149.33',
      '147.90',
      '148.81',
      '148.57',
      '145.84',
      '142.73',
      '143.22',
      '145.63',
      '146.61',
      '146.70',
      '145.15',
      '141.70',
      '142.62',
      '141.29',
      '142.44',
      '138.93',
      '140.90',
      '141.79',
      '143.08',
      '142.69',
      '142.60',
      '141.30',
      '140.70',
      '143.55',
      '144.62',
      '146.33',
      '148.54',
      '149.04',
      '149.26',
      '148.47',
      '148.42',
      '149.10',
      '148.63',
      '152.34',
      '149.58',
      '148.74',
      '149.80',
      '151.27',
      '150.74',
      '151.28',
      '150.44',
      '150.81',
      '147.92',
      '147.87',
      '149.99',
      '150.0',
      '151.0',
      '153.49',
      '157.87',
      '160.55',
      '161.02',
      '161.41',
      '161.94',
      '156.81',
      '160.24',
      '165.30',

    ]
    }
  ];

  // if (tickerName) {
  //   stock[1][`${tickerName}_ts_daily`].forEach(object => {
  //     CHART_Y[0].data.push(object.adjustedClose)
  //   });
  //   CHART_Y[0].name = `${tickerName} Price (USD)`
  // }
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
