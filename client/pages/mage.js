import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import ReactApexCharts from 'react-ApexCharts';
/* This example requires Tailwind CSS v2.0+ */
export default function StockPage() {

  const [ stockData, setStockData ] = useState({});
  let price = [];

  let ticker = 'MCD';

  const handleClick = (event) => {

    event.preventDefault();
    axios.post('http://localhost:3001/api/stock-data', {
    ticker
  }).then(result => {
   // console.log(result.data);
    setStockData(result.data);
    console.log(stockData.tsTickerData.MCD_ts_daily[0].close);

    for (let close of stockData.tsTickerData.MCD_ts_daily.close) {
      price.push(close);
    }

    console.log('price: ', price);

  }).catch(err => {
    console.log('Could not get daily data');
  })
  }



  const config = {
    series: [{
      name: "Performance",
      data: price
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
        text: `McDonald's Stock Price`,
        align: 'left'
      },  
    
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
        <div className="px-4 py-5 bg-gray-50 sm:p-6">{/* Content goes here */}</div>
        <div className="px-4 py-4 sm:px-6">
          {/* Content goes here */}
          <Footer />
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    )
  }