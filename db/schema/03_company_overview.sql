-- Drop & Create Template Table For Company Overview Data

DROP TABLE IF EXISTS company_overview_template CASCADE;
CREATE TABLE company_overview_template (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  ticker VARCHAR(255) NOT NULL,
  exchange VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  currency VARCHAR(255) NOT NULL,
  sector VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);
