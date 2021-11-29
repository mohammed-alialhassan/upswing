import { useEffect, useState } from 'react';
import * as React from 'react';
import * as LightweightCharts from 'lightweight-charts';

import axios from 'axios';
import { useQuery, useMutation, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


// const queryClient = new QueryClient();

const status = [
  {
      value: 'Daily',
      label: 'Daily'
  },
  {
      value: 'Weekly',
      label: 'Weekly'
  },
  {
      value: 'Monthly',
      label: 'Monthly'
  }
];


function AreaChart() {

  function DataFetch() {
    const { isLoading, data, error, isError } =
    useQuery('stock-data', () => {
      const { data } = axios.get('http://localhost:8081/api/stock-data')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      console.log(data, 'boom!');
      return data;
    });

    if(isLoading) {
      return "Loading..."
    }

    if (isError) {
      return `An error has occurred: ${error.message}`
    }
    return data;
  }

  // console.log(DataFetch().data.tsTickerData.IBM_ts_daily);

  // DataFetch().data.tsTickerData.IBM_ts_daily.date;
  // DataFetch().data.tsTickerData.IBM_ts_daily.adjusted_close;






  const ref = React.useRef();
    useEffect(() => {
        const chart = LightweightCharts.createChart(document.body, {
            width: 800,
            height: 800,
            rightPriceScale: {
                scaleMargins: {
                    top: 0.1,
                    bottom: 0.5
                },
                borderVisible: false
            },
            layout: {
                backgroundColor: '#131722',
                textColor: '#d1d4dc'
            },
            grid: {
                vertLines: {
                    color: 'rgba(42, 46, 57, 0)'
                },
                horzLines: {
                    color: 'rgba(42, 46, 57, 0.6)'
                }
            }
        });

        const areaSeries = chart.addAreaSeries({
            topColor: 'rgba(38,198,218, 0.56)',
            bottomColor: 'rgba(38,198,218, 0.04)',
            lineColor: 'rgba(38,198,218, 1)',
            lineWidth: 2
        });

        const volumeSeries = chart.addHistogramSeries({
            color: '#26a69a',
            priceFormat: {
                type: 'volume'
            },
            priceScaleId: '',
            scaleMargins: {
                top: 0.8,
                bottom: 0
            },
            opacity: 0.5
        });


          areaSeries.setData([
            { time: '2019-04-11', value: 80.01 },
            { time: '2019-04-12', value: 96.63 },
            { time: '2019-04-13', value: 76.64 },
            { time: '2019-04-14', value: 81.89 },
            { time: '2019-04-15', value: 74.43 },
            { time: '2019-04-16', value: 80.01 },
            { time: '2019-04-17', value: 96.63 },
            { time: '2019-04-18', value: 76.64 },
            { time: '2019-04-19', value: 81.89 },
            { time: '2019-04-20', value: 74.43 }
        ]);

        volumeSeries.setData([
            { time: '2018-10-19', value: 19103293.0, color: 'rgba(0, 150, 136, 0.8)' },
            { time: '2018-10-22', value: 21737523.0, color: 'rgba(0, 150, 136, 0.8)' },
            { time: '2018-10-23', value: 29328713.0, color: 'rgba(0, 150, 136, 0.8)' },
            { time: '2018-10-24', value: 37435638.0, color: 'rgba(0, 150, 136, 0.8)' },
            { time: '2018-10-25', value: 25269995.0, color: 'rgba(255,82,82, 0.8)' },
            { time: '2018-10-26', value: 24973311.0, color: 'rgba(255,82,82, 0.8)' },
            { time: '2018-10-29', value: 22103692.0, color: 'rgba(0, 150, 136, 0.8)' },
            { time: '2018-10-30', value: 25231199.0, color: 'rgba(0, 150, 136, 0.8)' },
            { time: '2018-10-31', value: 24214427.0, color: 'rgba(255,82,82, 0.8)' }
        ]);

        return () => {
            chart.remove();
        };
    }, []);

    return (
        <>
        {/* <QueryClientProvider client={queryClient}>...</QueryClientProvider> */}
            <div ref={ref} />
        </>
    );
}

export default AreaChart;
