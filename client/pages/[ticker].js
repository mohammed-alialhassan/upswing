import React, { useState, useReducer } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import ReactApexChart from 'react-ApexCharts';
import { useRouter } from 'next/router';

/* This example requires Tailwind CSS v2.0+ */
export default function StockPage() {

  const [ stockData, setStockData ] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialState = 'Daily';

  function reducer(state, action) {
    switch (action.type) {
      case 'Daily':
        console.log(state);
        return state = 'Daily';
      case 'Weekly':
        console.log(state);
        return state = 'Weekly';
      case 'Monthly':
        console.log(state);
        return state = 'Monthly';
      default:
       return state = 'Daily';
    }
  }



  const router = useRouter()
  let tickerData = JSON.parse(router.query.data);
  const ticker = router.query.name;
 // console.log(tickerData);
  console.log('BOOOM MF!!!!!!!!!!: ', tickerData['tsTickerData'][ticker+'_company_overview'][0]['name']);

  let companyName = tickerData['tsTickerData'][ticker+'_company_overview'][0]['name'];
  let dailyDate = [];
  let dailyPrice = [];
  let weeklyDate = [];
  let weeklyPrice = [];
  let monthlyDate = [];
  let monthlyPrice = [];

  for (let index of tickerData['tsTickerData'][ticker+'_ts_daily']) {
    dailyDate.push(index.date);
    dailyPrice.push(index.close);
  }

  for (let index of tickerData['tsTickerData'][ticker+'_ts_weekly']) {
    weeklyDate.push(index.date);
    weeklyPrice.push(index.adjusted_close);
  }

  for (let index of tickerData['tsTickerData'][ticker+'_ts_monthly']) {
    monthlyDate.push(index.date);
    monthlyPrice.push(index.adjusted_close);
  }

  const config = {
    series: [{
      name: "Performance",
      data: dailyPrice
    }],
    options: {
      chart: {
        toolbar: {
          show: true,
          zoom: true,
        },
      },
  
      dataLabels: {
        enabled: true
      },   
    
      stroke: {
        curve: "smooth"
      },
     
      title: {
        text: `${companyName}'s Stock Price (Daily)`,
        align: 'left'
      },  
    
      xaxis: {
        categories: dailyDate,
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

  const config2 = {
    series: [{
      name: "Performance",
      data: weeklyPrice
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
        text: `${companyName}'s Stock Price (Weekly)`,
        align: 'left'
      },  
    
      xaxis: {
        categories: weeklyDate,
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

  const config3 = {
    series: [{
      name: "Performance",
      data: monthlyPrice
    }],
    options: {
      chart: {
        toolbar: {
          show: true,
          selection: true,
        },
      },
  
      dataLabels: {
        enabled: true
      },   
    
      stroke: {
        curve: "smooth"
      },
     
      title: {
        text: `${companyName}'s Stock Price (Monthly)`,
        align: 'left'
      },  
    
      xaxis: {
        categories: monthlyDate,
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
        <div className="px-4 py-5 bg-teal-400 flex justify-end sm:px-6">
          {/* Content goes here */}
        
          
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 bg-gray-50 sm:p-6">{/* Content goes here */}
       <div className='ml-20 flex justify-end'>
          <span className="relative z-0 inline-flex  shadow-sm  rounded-md">
      <button
        type="button"
        onClick={() => dispatch({ type: 'Daily' })}
        className="relative inline-flex items-center px-2 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Daily
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'Weekly' })}
        className="-ml-px relative inline-flex items-center px-2 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Weekly
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'Monthly' })}
        className="-ml-px relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Monthly
      </button>
    </span>
        </div>

        <ReactApexChart options={config.options} series={config.series} type="line" height={600} />
        </div>

        <div className="px-4 py-5 bg-gray-50 sm:p-6">{/* Content goes here */}
        <ReactApexChart options={config2.options} series={config2.series} type="line" height={600} />
        </div>
        <div className="px-4 py-5 bg-gray-50 sm:p-6">{/* Content goes here */}
        <ReactApexChart options={config3.options} series={config3.series} type="line" height={600} />
        </div>
        <div className="px-4 py-4 sm:px-6">
          {/* Content goes here */}
          <Footer />
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    )
  }