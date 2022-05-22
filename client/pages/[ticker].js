import React, { useState, useReducer, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import CompanyHeading from '../components/CompanyHeading';
import dynamic from 'next/dynamic'

/* This example requires Tailwind CSS v2.0+ */
export default function StockPage() {
  
  const router = useRouter();
  const [ graph, setGraph ] = useState('Daily');
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
  
  // This state and useeffect allows to authenticate whether a guest is logged in or not, 
  // helps with figuring which navbar to display
    useEffect(() => {
      axios.get('http://localhost:3001/landing')
      .then(result => {
          if (result.data) {
            setIsLoggedIn(true); 
          }
        }).catch(err => {
          console.log(err.message);
      })
    }, [isLoggedIn]);

  let tickerData = JSON.parse(router.query.data);
  const ticker = router.query.name;
  
  let companyName = tickerData['tsTickerData'][ticker+'_company_overview'][0]['name'];
  let description = tickerData['tsTickerData'][ticker+'_company_overview'][0]['description'];
  let companyOverview = tickerData['tsTickerData'][ticker+'_company_overview'][0];
  let companyBalanceSheet = tickerData['tsTickerData'][ticker+'_balance_sheet'][0];
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
          zoomin: true,
          zoomout: true,
          pan: true,
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
        },
        hideOverlappingLabels: true,
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

      chart: {
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    forecastDataPoints: {
      count: 0,
      fillOpacity: 0.5,
      strokeWidth: 2,
      dashArray: 6,
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

  const stats = [
    { name: 'Total Subscribers', stat: '71,897' },
    { name: 'Overview', stat: `${description}` },
    { name: 'Avg. Click Rate', stat: '24.57%' },
  ] 

    return (
      
      <div className="bg-slate-700 overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <Navbar isLoggedIn={isLoggedIn} />
{(typeof window !== 'undefined') &&
        <><div className="px-4 py-12 min-w-full min-h-full bg-slate-700 flex justify-end sm:px-6">
            {/* Content goes here */}
            <CompanyHeading description={description} companyName={companyName} companyOverview={companyOverview} companyBalanceSheet={companyBalanceSheet} ticker={ticker} />

            {/* We use less vertical padding on card headers on desktop than on body sections */}
          </div><div className="px-4 py-5 mt-5 mb-10 bg-gray-50 mx-6 outline outline-black outline-1 sm:p-6">{/* Content goes here */}
              <div className=' bg-gray-50  flex justify-center sm:text-sm lg:justify-end sm:ml-0 lg:ml-20 xl:ml-20 2xl:ml-20'>
                <span className="relative z-0 inline-flex  shadow-sm  rounded-md">
                  <button
                    type="button"
                    onClick={() => setGraph('Daily')}
                    className="relative inline-flex items-center px-2 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Daily
                  </button>
                  <button
                    type="button"
                    onClick={() => setGraph('Weekly')}
                    className="-ml-px relative inline-flex items-center px-2 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    onClick={() => setGraph('Monthly')}
                    className="-ml-px relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Monthly
                  </button>
                </span>
              </div>

              <div className="mixed-chart">

                {graph === 'Daily' ? <Chart options={config.options} series={config.series} type="line" height={600} /> :
                  graph === 'Weekly' ? <Chart options={config2.options} series={config2.series} type="line" height={600} /> :
                    graph === 'Monthly' ? <Chart options={config3.options} series={config3.series} type="line" height={600} /> : <Chart options={config.options} series={config.series} type="line" height={600} />}

              </div>

            </div><div>
              {/* Content goes here */}
              <Footer />
              {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
            </div></>
     } </div>
    )
  }