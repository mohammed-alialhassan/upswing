-- Drop & Create Template Table For Balance Sheet Data

DROP TABLE IF EXISTS balance_sheet_template CASCADE;
CREATE TABLE balance_sheet_template (
  id SERIAL PRIMARY KEY NOT NULL,
  ticker VARCHAR(255) NOT NULL,
  fiscal_date_ending VARCHAR(255) NOT NULL,
  reported_currency VARCHAR(255) NOT NULL,
  total_assets VARCHAR(255) NOT NULL,
  inventory VARCHAR(255) NOT NULL,
  property_plant_equipment VARCHAR(255) NOT NULL,
  goodwill VARCHAR(255) NOT NULL,
  long_term_investments VARCHAR(255) NOT NULL,
  short_term_investments VARCHAR(255) NOT NULL,
  total_liabilities VARCHAR(255) NOT NULL,
  current_debt VARCHAR(255) NOT NULL,
  common_stock VARCHAR(255) NOT NULL,
  common_stock_shares_outstanding VARCHAR(255) NOT NULL
);
