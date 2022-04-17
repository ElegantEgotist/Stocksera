# Stocksera

![Stocksera](./static/images/github/logo.png)

[![Twitter](https://img.shields.io/twitter/url/https/twitter.com/stocksera_bot.svg?style=social&label=Follow%20%40stocksera_bot)](https://twitter.com/stocksera_bot)

<b>NEW RELEASE: Stocksera API now available at https://pypi.org/project/stocksera or via `pip install stocksera`. View documentation at https://github.com/guanquann/Stocksera-API. </b>

You can view the application in <a href="https://stocksera.pythonanywhere.com" target="_blank">stocksera.pythonanywhere.com</a>.

Live demo is available at https://youtu.be/jkAZu7DvhvY.

### Support:
This website is free for everyone. But if you want to support me, please give me a star on Github or you can PayPal to <a href="https://www.paypal.me/stocksera">paypal.me/stocksera</a>. Patreon is also available <a href="https://www.patreon.com/stocksera" target="_blank">here</a>.

### User Guide:

#### /ticker/
- View graph of your favourite ticker.
- Gather key statistics such as EPS, beta and SMA.
- Data is from <a href="https://finance.yahoo.com/">yahoo finance</a>
![Ticker Stats](./static/images/github/ticker_main.png)


- Sort historical data based on % price change, volume, day and so on.
![Sort Historical Data](./static/images/github/ticker_main1.png)


- Get recent insider trading of a stock.
![Insider Trading](./static/images/github/ticker_main2.png)


- Get recent news and sentiment of a stock.
![News Sentiment](./static/images/github/ticker_main3.png)


- Google trend of a stock and compare it with it's closing price.
![Google Trend](./static/images/github/ticker_main4.png)


- Upgrades & Downgrades of a stock.
![Recommendations](./static/images/github/ticker_main5.png)


- Links to Stocktwits for discussion.
![Discussion](./static/images/github/ticker_main6.png)


- Links to Trading View for TA.
![Discussion](./static/images/github/ticker_main7.png)


#### /ticker/options/
- View options chain of your favourite ticker.
- Find out the max-pain price, OTM & ITM options and Call/Put ratio of the next few weeks.
- Data is from <a href="https://developer.tdameritrade.com/apis/">TD Ameritrade</a>.
![Options](./static/images/github/options.png)
![Option Chain](./static/images/github/options_chain.png)

#### /ticker/short_volume/
- View short volume and short percentage of some of the popular tickers.
- Data is from <a href="https://cdn.finra.org/">Finra</a>.
![Short Volume](./static/images/github/short_volume.png)

#### /ticker/failure_to_deliver/
- View failure to deliver data of tickers.
- Data is from <a href="https://www.sec.gov/data/foiadocsfailsdatahtm">SEC.gov</a>.
![Failure to Deliver](./static/images/github/ftd.png)

#### /ticker/borrowed_shares/
- View number of borrowed shares available and the borrow fee.
- Data is from <a href="https://www.interactivebrokers.com/">IBKR</a>.
![Borrowed Shares](./static/images/github/borrowed_shares.png)

#### /wsb_live_ticker/
- View number of mentions in WSB, calls/puts mentions and sentiment over time.
![WSB Live Ticker](./static/images/github/wsb_live_ticker.PNG)

#### /reddit_analysis/
- Find the most popular tickers with their sentiment level on different subreddits such as r/wallstreetbets, r/stockmarket and r/stocks. Inspired from <a href="https://github.com/kaito1410/AutoDD_Rev2/blob/main/AutoDD.py">Auto DD</a>.
- Trending cryptocurrencies are also analysed in r/Cryptocurrency.
- This only reads the post of the subreddit. The comments are not taken into account. 
- Data is updated daily, around 1 hour before market open.
![Reddit Analysis Stocks](./static/images/github/reddit_trending.png)
![Reddit Analysis Crypto](./static/images/github/reddit_cryptocurrency.png)

#### /wsb_live/
- Tracks trending tickers, sentiment, puts/calls ratio, price change and more on r/wallstreetbets realtime.
![WSB Live](./static/images/github/wsb_live.PNG)
![WSB Live](./static/images/github/wsb_live1.PNG)
![WSB Live](./static/images/github/wsb_live2.PNG)

#### /crypto_live/
- Track trending crypto, sentiment, price change and more on r/CryptoCurrency realtime.
![Crypto Live](./static/images/github/crypto_live.png)

#### /reddit_etf/
- Analyse the performance of trending tickers on r/wallstreetbets.
- Top 10 most mentioned tickers with the highest sentiment will be added to the "Reddit ETF" when market opens.
- Tickers that fall outside the Top 10 list will be sold.
![Reddit ETF](./static/images/github/etf.png)

#### /reddit_ticker_analysis/
- View ranking of popular tickers in Reddit over time and compare it with its price.
![Reddit Ranking Stocks](./static/images/github/reddit_ranking.png)

#### /subreddit_count/
- Look at the increase in number of redditors on popular subreddits such as r/wallstreetbets, r/Superstonk and r/amcstock.
- Growth in number of new redditors and percentage of active redditors.
![Subreddit Stats](./static/images/github/subreddit_stats.png)

#### /subreddit_count/?quote=AMC
- Look at the increase in number of redditors/active users/percentage growth on specific subreddits and compare it with the stock price.
![Subreddit Stats Individual](./static/images/github/subreddit_stats_individual.png)

#### /market_summary/
- Overview of the performance of S&P500, Nasdaq100, DIA & WSB.
![Market Overview](./static/images/github/market_summary.png)

#### /futures/
- View market futures from Trading View
![Futures](./static/images/github/futures.png)

#### /earnings_calendar/
- View all tickers earnings report for the week ahead.
- Market Cap, EPS Estimate and EPS Actual.
- Sortable by market cap and day.
- Data is from <a href="https://finance.yahoo.com/">yahoo finance</a>.
![Earnings Calendar](./static/images/github/earnings_calendar.png)

#### /ipo_calendar/
- View upcoming and past IPOs
![IPO](./static/images/github/ipo.png)

#### /stocktwits/
- View stocktwits trending tickers over time
![Stocktwits Trending](./static/images/github/stocktwits_trending.png)

#### /senate/
- View recent senate trading
![Senate](./static/images/github/senate_trading.png)
![Senate](./static/images/github/senate_trading1.png)
![Senate](./static/images/github/senate_trading2.png)

#### /house/
- View recent house trading
![House](./static/images/github/house_trading.png)
![House](./static/images/github/house_trading1.png)
![House](./static/images/github/house_trading2.png)

#### /short_interest/
- Identify tickers with the highest short interest level.
- Data is from <a href="https://www.highshortinterest.com">shortinterest.com</a>
![Short Interest](./static/images/github/short_interest.png)

#### /low_float/
- Identify tickers with low float.
- Data is from <a href="https://www.lowfloat.com">lowfloat.com</a>
![Low Float](./static/images/github/low_float.png)

#### /ark_trades/
- View holdings, trades and news of all companies in ARK Fund.
- View trades and ownership of a ticker.
- Data is from <a href="https://arkfunds.io/api/">arkfunds.io/api</a>
![ARK Trades](./static/images/github/ark_trades.png)
![ARK Trades Individual](./static/images/github/ark_trades_individual.png)

#### /reverse_repo/
- Daily reverse repo transactions (amount, number of parties, average)
- Data is from <a href="https://apps.newyorkfed.org/markets/autorates/tomo-search-page">newyorkfed</a>
![Reverse Repo](./static/images/github/reverse_repo.PNG)

#### /daily_treasury/
- Daily treasury (closing balance, opening balance)
- Data is from <a href="https://fiscaldata.treasury.gov/datasets/daily-treasury-statement/operating-cash-balance">fiscaldata.treasury.gov</a>
![Daily Treasury](./static/images/github/daily_treasury.PNG)

#### /inflation/
- Monthly inflation rate (with heat map) from 1960
- Data is from <a href="https://www.usinflationcalculator.com/inflation/current-inflation-rates/">usinflationcalculator.com/inflation</a>
![Inflation](./static/images/github/inflation.png)

#### /retail_sales/
- Monthly retail sales and compare it with the number of covid-19 cases
- Retail sales data is from <a href="https://ycharts.com/indicators/us_retail_and_food_services_sales">ycharts.com/indicators/us_retail_and_food_services_sales</a>
- Covid-19 data is from <a href="https://covid.ourworldindata.org/data/owid-covid-data.csv">covid.ourworldindata.org/data/owid-covid-data.csv</a>
![Retail Sales](./static/images/github/retail_sales.png)

#### /initial_jobless_claims/
- View weekly initial jobless claims
![Initial Jobless Claims](./static/images/github/jobless_claims.png)

#### /insider/
- Get latest insider trading in the last 1 month
![Insider Trading](./static/images/github/latest_insider.png)
![Insider Trading](./static/images/github/latest_insider1.png)

#### /beta/
- Calculate the true beta value of any stock real-time.
![Beta](./static/images/github/beta.png)

#### /amd_xlnx_ratio/
- AMD-XLNX Share Price Ratio.
- Percentage upside when buying XLNX
![AMD-XLNX Ratio](./static/images/github/amd_xlnx_ratio.PNG)

#### /news/
- View breaking, crypto, forex and merger news
![Latest News](./static/images/github/news.png)

### For developers:

#### Setting up and installing dependencies
```
# Clone the project
git clone https://github.com/guanquann/Stocksera.git

# Create environment
py -m venv venv

# Navigate into project's folder and activate venv
cd Stockera/venv/Scripts
activate
cd .. / ..

# Install modules
pip install -r requirements.txt
```

Download nltk data for sentiment analysis. Type the following in console:
```
>>> import nltk
>>> nltk.download("vader_lexicon")
```

#### tasks_to_run.py
- Compilation of tasks that are needed to be completed.
- Get trending tickers in Reddit, subreddit subscribers statistics, stocks with low float and high short interest.

#### Run scheduled tasks
- Please refer to [Scheduled Tasks Guide](https://github.com/guanquann/Stocksera/tree/master/scheduled_tasks) for more information on how to run scheduled tasks.

#### Running the application
You can run run_app.bat.

Alternatively, you can run using your terminal:
```
cd venv/Scripts
activate
cd ../..
py manange.py runserver
```
You can view the application in 127.0.0.1:8000.

### License:
This project is under the <a href="https://github.com/guanquann/stocksera/blob/master/LICENSE">MIT</a> license.