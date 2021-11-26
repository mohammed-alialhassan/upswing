-- Drop & Create Watchlist Table

DROP TABLE IF EXISTS watchlist CASCADE;
CREATE TABLE watchlist (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  stock_id INTEGER NOT NULL
);
