CREATE TABLE `is_holiday` (
	`date` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `stock_prices` (
	`timestamp` text NOT NULL,
	`symbol` text PRIMARY KEY NOT NULL,
	`ltp` real,
	`ltv` real,
	`point_change` real,
	`percent_change` real,
	`open_price` real,
	`high_price` real,
	`low_price` real,
	`avg_traded_price` real,
	`volume` integer,
	`previous_closing` real
);
--> statement-breakpoint
CREATE TABLE `todays_price` (
	`business_date` text NOT NULL,
	`security_id` text NOT NULL,
	`symbol` text NOT NULL,
	`security_name` text NOT NULL,
	`open_price` real,
	`high_price` real,
	`low_price` real,
	`close_price` real,
	`total_traded_quantity` integer,
	`total_traded_value` real,
	`previous_day_close_price` real,
	`fifty_two_weeks_high` real,
	`fifty_two_weeks_low` real,
	`last_updated_time` text,
	`last_updated_price` real,
	`total_trades` integer,
	`average_traded_price` real,
	`market_capitalization` real
);
--> statement-breakpoint
CREATE UNIQUE INDEX `stock_prices_symbol_unique` ON `stock_prices` (`symbol`);