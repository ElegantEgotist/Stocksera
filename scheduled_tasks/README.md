# Stocksera Developers Guide

<b>You should run all commands from the main parent directory</b>
```
# Example of how you should run all the scheduled tasks
example: (venv) C:\Users\Acer\Stocksera>py tasks_to_run.py
example: (venv) C:\Users\Acer\Stocksera>py scheduled_tasks/get_financial.py
```

Ensure that you run scheduled_tasks/create_database.py first.
 
Before continuing, register for an API in the links shown below and add them in Stockera/config.yaml.

| API Source     | URL                                                 |
| -------------- |---------------------------------------------------- |
| Reddit         | https://www.reddit.com/prefs/apps                   |
| Twitter        | https://developer.twitter.com/en/portal/dashboard   |
| Finnhub        | https://finnhub.io/                                 |
| Polygon        | https://polygon.io/                                 |
| Gmail -optional| https://realpython.com/python-send-email/           |

To access stock options data, sign up for TD Ameritrade Developer Account and follow the instructions in: 
- https://www.reddit.com/r/algotrading/comments/c81vzq/td_ameritrade_api_access_2019_guide/
- https://developer.tdameritrade.com/content/simple-auth-local-apps
- Add your Client ID and Access Token in tdameritrade_config.yaml
- Ignore the refresh token for now as it will be generated automatically if your Client ID and Access Token are correct.
- NOTE: The Access Token expires every 90 days. So, remember to update it from time to time.

### NOTE: FOR FREQUENCY TO RUN THE SCRIPTS, SCROLL DOWN TO THE BOTTOM.

#### scheduled_tasks/reddit/stocks/scrape_trending_posts.py
- Script to scrape trending tickers in Reddit (r/wallstreetbets, r/StockMarket, r/stocks, r/options, r/pennystocks...).
- Additional information (beta, volume, industry, recommendation etc) of the ticker will be extracted from yahoo finance too.
- Edit your config in scheduled_tasks/config.py. Make sure you have you PRAW API key first.
- Extension of [https://github.com/kaito1410/AutoDD_Rev2](https://github.com/kaito1410/AutoDD_Rev2)

#### scheduled_tasks/reddit/stocks/scrape_discussion_thread.py
- Script that get trending tickers, sentiment and options data real-time from WSB discussion thread

#### scheduled_tasks/reddit/crypto/scrape_discussion_thread.py
- Script to scrape trending crypto in Reddit (r/CryptoCurrenncy).
- Additional information (circulating supply, max suply etc) will be extracted from CoinGeckoAPI.

#### scheduled_tasks/reddit/get_subreddit_count.py
- Script to get total number of users and active users in popular subreddits on Reddit.
- Shows the growth in new users over time and proportion active users.

#### scheduled_tasks/reddit/buy_trending_ticker.py
- Script that buys/sells tickers based on r/wallstreetbets sentiment.
- Update prices of tickers in custom ETF.

#### scheduled_tasks/twitter/scrape_trending_posts.py
- Get number of tweets of a ticker symbol in the last week.

#### scheduled_tasks/twitter/get_twitter_followers.py
- Get number of followers of business accounts in Twitter.

#### scheduled_tasks/economy/get_reverse_repo.py
- Get reverse repo transaction.

#### scheduled_tasks/economy/get_daily_treasury.py
- Get daily treasury.

#### scheduled_tasks/economy/get_inflation.py
- Get monthly inflation.

#### scheduled_tasks/economy/get_retail_sales.py
- Get monthly retail sales and compare it with the number of Covid-19 cases.

#### scheduled_tasks/economy/get_initial_jobless_claims.py
- Get weekly initial jobless claims.

#### scheduled_tasks/economy/get_upcoming_events_date.py
- Get next release date for inflation, retail sales, RRP, daily treasury.

#### scheduled_tasks/stocks/get_failure_to_deliver.py
- Get Failure to Deliver data from SEC

#### scheduled_tasks/stocks/get_short_volume.py
- Get short volume of ticker.

#### scheduled_tasks/stocks/get_financial.py
- Get financial data for companies.

#### scheduled_tasks/stocks/get_borrowed_shares.py
- Get number of borrowed shares available and the borrow fee of a stock

#### scheduled_tasks/discover/get_stocktwits_trending.py
- Get popular tickers in Stocktwits.

#### scheduled_tasks/discover/get_latest_insider_trading.py
- Get latest insider trading from Finviz.

#### scheduled_tasks/discover/miscellaneous.py
- Get stocks with low float and high short interest.

#### scheduled_tasks/discover/get_earnings.py
- Get upcoming earnings calendar

#### scheduled_tasks/discover/get_stocks_summary.py 
- Get heatmap of S&P 500, DOW and Nasdaq 100.

#### scheduled_tasks/discover/get_stock_splits.py 
- Get stocks with recent/upcoming stock splits.

#### scheduled_tasks/discover/get_dividends.py 
- Get stocks with recent/upcoming dividends.

#### scheduled_tasks/government/get_senate_trading.py     
- Get recent senate trading.

#### scheduled_tasks/government/get_house_trading.py     
- Get recent house trading.

#### scheduled_tasks/news/get_news.py     
- Get breaking, crypto, forex and merger news.

#### scheduled_tasks/others/get_popular_tickers.py
- To add a new ticker, add it to list_of_tickers list in full_ticker_list().

#### scheduled_tasks/others/get_ticker_info.py
- Get ticker information to cache data in order to speed up rendering time.

#### scheduled_tasks/others/get_tdameritrade_access_token.py
- Get access token from TD Ameritrade. Expires every 30mins.

#### scheduled_tasks/reset/reset_stocksera_trending.py
- Reset Stocksera trending table in database.

## Frequency to run tasks
- Do note that the frequency to run the files are for guidance only. You do not need to follow them strictly. Change according to your preference.

| Script Name                                                                           | Functions                               | Frequency   |
| ------------------------------------------------------------------------------------- |-----------------------------------------|-------------|
| scheduled_tasks/reddit/stocks/scrape_trending_posts.py                                | main()                                  | Daily (PM)  |
| scheduled_tasks/reddit/stocks/scrape_discussion_thread.py                             | wsb_live(), wsb_change(), get_mkt_cap() | 10 Mins     |
| scheduled_tasks/reddit/stocks/scrape_discussion_thread.py                             | update_hourly()                         | Hourly      |
| scheduled_tasks/reddit/crypto/scrape_trending_posts.py                                | main()                                  | Daily (PM)  |
| scheduled_tasks/reddit/crypto/scrape_discussion_thread.py                             | crypto_live(), crypto_change()          | 10 Mins     |
| scheduled_tasks/reddit/crypto/scrape_discussion_thread.py                             | update_hourly()                         | Hourly      |
| scheduled_tasks/reddit/get_subreddit_count.py                                         | main()                                  | Daily (MH)  |
| scheduled_tasks/reddit/buy_trending_tickers.py                                        | main()                                  | Daily (MH)  |
| scheduled_tasks/twitter/get_twitter_followers.py                                      | main()                                  | Daily       |
| scheduled_tasks/twitter/scrape_trending_posts.py                                      | main()                                  | Daily (MH)  |
| scheduled_tasks/economy/get_reverse_repo.py                                           | reverse_repo()                          | 1.30PM      |
| scheduled_tasks/economy/get_daily_treasury.py                                         | download_json()                         | 4.00PM      |
| scheduled_tasks/economy/get_inflation.py                                              | inflation()                             | Monthly     |
| scheduled_tasks/economy/get_retail_sales.py                                           | retail_sales()                          | Monthly     |
| scheduled_tasks/economy/get_initial_jobless_claims.py                                 | jobless_claims()                        | Weekly      |
| scheduled_tasks/economy/get_upcoming_events_date.py                                   | main()                                  | 6.00PM      |
| scheduled_tasks/stocks/get_failure_to_deliver.py                                      | main()                                  | 2 Weeks     |
| scheduled_tasks/stocks/get_short_volume.py                                            | main()                                  | 6.00PM      | 
| scheduled_tasks/stocks/get_borrowed_shares.py                                         | main()                                  | 10 Mins     |
| scheduled_tasks/discover/miscellaneous.py                                             | main()                                  | Daily (AH)  |
| scheduled_tasks/discover/get_earnings.py                                              | main()                                  | Daily (AH)  |
| scheduled_tasks/discover/get_latest_insider_trading.py                                | main()                                  | 2 Hours     |
| scheduled_tasks/discover/get_stocks_summary.py                                        | main()                                  | 10 Mins     |
| scheduled_tasks/discover/get_stocktwits_summary.py                                    | main()                                  | Hourly      |
| scheduled_tasks/discover/get_ipo_calendar.py                                          | main()                                  | Daily (AH)  |
| scheduled_tasks/discover/get_stock_splits.py                                          | main()                                  | Daily (AH)  |
| scheduled_tasks/discover/get_dividends.py                                             | main()                                  | Daily (AH)  |
| scheduled_tasks/government/get_senate_trading.py                                      | main()                                  | Daily (AH)  |
| scheduled_tasks/government/get_house_trading.py                                       | main()                                  | Daily (AH)  |
| scheduled_tasks/news/get_news.py                                                      | main()                                  | 10 Mins     |
| scheduled_tasks/reset/reset_stocksera_trending.py                                     | reset_trending_db()                     | 30 Mins     |
| scheduled_tasks/others/get_tdameritrade_access_token.py                               | get_access_token()                      | 30 Mins     |