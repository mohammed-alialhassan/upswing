// material-ui
import { useTheme } from '@mui/material/styles';

import { useQuery, useMutation, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import * as LightweightCharts from 'lightweight-charts';
// import { useSelector } from 'react-redux';

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

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const CandlestickGraphChart = ({ isLoading }) => {


  const ref = React.useRef();

    useEffect(() => {
        const chart = LightweightCharts.createChart(document.body, { width: 800, height: 800 });
        const candlestickSeries = chart.addCandlestickSeries();
        const volumeSeries = chart.addHistogramSeries({
            color: '#26a69a',
            priceFormat: {
                type: 'volume'
            },
            priceScaleId: '',
            scaleMargins: {
                top: 0.8,
                bottom: 0
            }
        });
        candlestickSeries.setData([
            { time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
            { time: '2018-10-22', open: 180.82, high: 181.4, low: 177.56, close: 178.75 },
            { time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53 },
            { time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97 },
            { time: '2018-10-25', open: 177.52, high: 180.5, low: 176.83, close: 179.07 },
            { time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23 },
            { time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.2 },
            { time: '2018-10-30', open: 173.16, high: 176.43, low: 172.64, close: 176.24 },
            { time: '2018-10-31', open: 177.98, high: 178.85, low: 175.59, close: 175.88 },
            { time: '2018-11-01', open: 176.84, high: 180.86, low: 175.9, close: 180.46 },
            { time: '2018-11-02', open: 182.47, high: 183.01, low: 177.39, close: 179.93 },
            { time: '2018-11-05', open: 181.02, high: 182.41, low: 179.3, close: 182.19 }
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
            <div ref={ref} />{' '}
        </>
    );
};

CandlestickGraphChart.propTypes = {
    isLoading: PropTypes.bool
};

export default CandlestickGraphChart;
