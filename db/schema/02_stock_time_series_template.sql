-- Create template table for stock time series data

CREATE TABLE stock_time_series_template (
  id SERIAL PRIMARY KEY NOT NULL,
  ticker VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  open VARCHAR(255) NOT NULL,
  high VARCHAR(255) NOT NULL,
  low VARCHAR(255) NOT NULL,
  close VARCHAR(255) NOT NULL,
  adjusted_close VARCHAR(255) NOT NULL,
  volume VARCHAR(255) NOT NULL,
  dividend_amount VARCHAR(255) NOT NULL,
  split_coefficient VARCHAR(255) NOT NULL
);


