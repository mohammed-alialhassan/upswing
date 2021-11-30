import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const DATA_INPUT = {}

//will need a loop for 100 values that pushes to an array and object keys for date (and .getTime())
DATA_INPUT.date = [
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

//will need a loop that pushes to an array for time.adjusted close
DATA_INPUT.value = [
  23,
  11,
  22,
  27,
  13,
  22,
  37,
  21,
  44,
  22,
  30
]

//can get name from the data object
const CHART_DATA = [
  {
    name: 'Stock Price',
    type: 'area',
    data: DATA_INPUT.value
  }
];

export default function LineChartDaily() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { curve: 'straight' },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: DATA_INPUT.date,
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Website Visits" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
