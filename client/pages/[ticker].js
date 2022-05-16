import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import ReactApexChart from 'react-ApexCharts';
/* This example requires Tailwind CSS v2.0+ */
export default function StockPage() {

  const [ stockData, setStockData ] = useState({});
  let date = [];

  let ticker = 'MCD';

  const handleClick = (event) => {

    event.preventDefault();
    axios.post('http://localhost:3001/api/stock-data', {
    ticker
  }).then(result => {
   console.log(result.data);
    setStockData(result.data);
    console.log(stockData.tsTickerData.MCD_ts_daily[0].date);

    for (let index of stockData.tsTickerData.MCD_ts_daily) {
      date.push(index.date);
    }

    console.log('date: ', date);

  }).catch(err => {
    console.log('Could not get daily data');
  })
  }

  const config = {
    series: [{
      name: "Performance",
      data: [261.7300, 264.3900, 264.9400, 265.950, 268.2400, 267.8800, 268.4900, 267.2100, 268.0700, 268.5800, 268.5100, 267.1900, 269.6900, 267.0600, 264.4100, 262.1200, 260.9200, 261.4100, 257.7100, 256.4800, 255.2200, 253.1300, 254.5900, 253.6100, 250.6800, 249.8500, 248.7400, 256.0900, 259.4500, 258.9900, 262.2800, 260.6400, 260.0600, 259.8500, 260.0800, 259.8600, 256.8700, 255.1600, 253.3900, 253.8100, 253.0900, 250.9300, 250.6000, 252.7000, 247.7900, 245.0300, 249.4500, 244.7700, 239.6300, 240.9400, 236.6500, 235.8100, 224.3300, 222.7900, 222.4700, 222.0000, 226.8700, 226.1800, 232.5700, 238.1400, 237.4700, 238.9200, 235.3200, 238.1200, 236.1200, 240.2600, 241.5800, 242.9400, 248.1700, 249.0300, 247.2800, 249.2500, 246.8300, 248.5100, 251.4600, 254.3600, 251.4600, 250.4500, 249.1700, 251.3300, 250.5100, 251.0600, 255.4000, 255.8500, 255.2500, 250.1700, 252.8800, 248.5800, 247.1400, 254.1900, 249.1600, 246.6400, 245.8700, 254.3200, 248.9200, 250.7800, 247.4900, 245.6800, 244.4300, 244.1900]
    }],
    options: {
      chart: {
        toolbar: {
          show: true
        },
      },
  
      dataLabels: {
        enabled: true
      },   
    
      stroke: {
        curve: "smooth"
      },
     
      title: {
        text: `McDonald's Stock Price (Daily)`,
        align: 'left'
      },  
    
      xaxis: {
        categories: ['2021-12-20', '2021-12-21', '2021-12-22', '2021-12-23', '2021-12-27', '2021-12-28', '2021-12-29', '2021-12-30', '2021-12-31', '2022-01-03', '2022-01-04', '2022-01-05', '2022-01-06', '2022-01-07', '2022-01-10', '2022-01-11', '2022-01-12', '2022-01-13', '2022-01-14', '2022-01-18', '2022-01-19', '2022-01-20', '2022-01-21', '2022-01-24', '2022-01-25', '2022-01-26', '2022-01-27', '2022-01-28', '2022-01-31', '2022-02-01', '2022-02-02', '2022-02-03', '2022-02-04', '2022-02-07', '2022-02-08', '2022-02-09', '2022-02-10', '2022-02-11', '2022-02-14', '2022-02-15', '2022-02-16', '2022-02-17', '2022-02-18', '2022-02-22', '2022-02-23', '2022-02-24', '2022-02-25', '2022-02-28', '2022-03-01', '2022-03-02', '2022-03-03', '2022-03-04', '2022-03-07', '2022-03-08', '2022-03-09', '2022-03-10', '2022-03-11', '2022-03-14', '2022-03-15', '2022-03-16', '2022-03-17', '2022-03-18', '2022-03-21', '2022-03-22', '2022-03-23', '2022-03-24', '2022-03-25', '2022-03-28', '2022-03-29', '2022-03-30', '2022-03-31', '2022-04-01', '2022-04-04', '2022-04-05', '2022-04-06', '2022-04-07', '2022-04-08', '2022-04-11', '2022-04-12', '2022-04-13', '2022-04-14', '2022-04-18', '2022-04-19', '2022-04-20', '2022-04-21', '2022-04-22', '2022-04-25', '2022-04-26', '2022-04-27', '2022-04-28', '2022-04-29', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05', '2022-05-06', '2022-05-09', '2022-05-10', '2022-05-11', '2022-05-12'],
        title: {
          text: 'Date'
        }
      },
  
      yaxis: {
        title: {
          text: 'Price'
        }
      }
    }
  }
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <Navbar />
        <div className="px-4 py-5 bg-teal-400 sm:px-6">
          {/* Content goes here */}
          <button onClick={handleClick}>click</button>
          
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 bg-gray-50 sm:p-6">{/* Content goes here */}
        <ReactApexChart options={config.options} series={config.series} type="line" height={600} />
        </div>
        <div className="px-4 py-4 sm:px-6">
          {/* Content goes here */}
          <Footer />
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    )
  }