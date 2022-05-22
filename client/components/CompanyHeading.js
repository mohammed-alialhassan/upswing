/* This example requires Tailwind CSS v2.0+ */
export default function CompanyHeading({ description, companyName, companyOverview, companyBalanceSheet, ticker }) {

    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

    const asset = formatter.format(companyBalanceSheet.total_assets);
    const liabilities = formatter.format(companyBalanceSheet.total_liabilities);
    const goodwill = formatter.format(companyBalanceSheet.goodwill);
    return (
      <div className="bg-gray-100 outline outline-black outline-1 min-w-full pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {companyName}
            </h2>
            <p className="text-sm text-gray-400 "> {ticker} • {companyOverview.exchange}  </p>
            <p className="mt-3 text-xl text-gray-500 sm:mt-3">
              {description}
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl out mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r hover:shadow-lg hover:shadow-black hover:outline hover:outline-2">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Total Assets</dt>
                    <dd className="order-1 text-2xl font-extrabold text-green-600"> {asset}</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r hover:shadow-lg hover:shadow-black hover:outline hover:outline-2">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Total Liabilities</dt>
                    <dd className="order-1 text-2xl font-extrabold text-red-600">{liabilities}</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l hover:shadow-lg hover:shadow-black hover:outline hover:outline-2">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Goodwill</dt>
                    <dd className="order-1 text-2xl font-extrabold text-sky-600"> {goodwill === '$NaN'? ('Not Available') : (goodwill)}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }