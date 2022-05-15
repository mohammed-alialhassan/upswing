-- Drop & Create Template Table For Stock Time Series Data

DROP TABLE IF EXISTS stock_time_series_template CASCADE;
CREATE TABLE stock_time_series_template (
  id SERIAL PRIMARY KEY NOT NULL,
  date VARCHAR(255) NOT NULL,
  open VARCHAR(255) NOT NULL,
  high VARCHAR(255) NOT NULL,
  low VARCHAR(255) NOT NULL,
  close VARCHAR(255) NOT NULL,
  adjusted_close VARCHAR(255),
  volume VARCHAR(255) NOT NULL
);
