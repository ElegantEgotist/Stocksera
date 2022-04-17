import os
import sys
import time
from datetime import datetime

sys.path.append(os.path.join(os.path.dirname(__file__), '../..'))
from scheduled_tasks.twitter.twitter_connection import *
from helpers import connect_mysql_database

cnx, engine = connect_mysql_database()
cur = cnx.cursor()

# key of the dict is the symbol of the ticker, while the value is the username of the Twitter account
interested_accounts = {
    "GME": "GameStop",
    "AMC": "AMCTheatres",
    "CLOV": "CloverHealth",
    "BB": "BlackBerry",
    "AMD": "AMD",
    "UWMC": "UWMlending",
    "NIO": "NIO",
    "TSLA": "Tesla",
    "AAPL": "Apple",
    "NOK": "Nokia",
    "NVDA": "Nvidia",
    "MSFT": "Microsoft",
    "RBLX": "Roblox",
    "F": "Ford",
    "PLTR": "PalantirTech",
    "COIN": "CoinBase",
    "RKT": "RocketCompanies",
    "MVIS": "MicroVision",
    "FUBO": "fuboTV",
    "VIAC": "ViacomCBS",
    "SNDL": "sundialcannabis",
    "SPCE": "virgingalactic",
    "SNAP": "Snapchat",
    "OCGN": "Ocugen",
    "ROKU": "Roku",
    "BABA": "AlibabaGroup",
    "SE": "SeaGroup",
    "EXPR": "express",
    "SOFI": "SoFi",
    "WKHS": "Workhorse_Group",
    "TLRY": "tilray",
    "WISH": "WishShopping",
    "CLF": "CliffsNR",
    "GOEV": "canoo",
    "DKNG": "DraftKings",
    "AMZN": "amazon",
    "TWTR": "Twitter",
    "FB": "Facebook",
    "PYPL": "PayPal",
    "SQ": "Square",
    "XPEV": "XPengMotors",
    "NKLA": "nikolamotor",
    "BNGO": "bionanogenomics",
    "SKLZ": "SKLZ",
    "CRSR": "CORSAIR",
    "CRSP": "CRISPRTX",
    "XELA": "ExelaTech",
    "MMAT": "Metamaterialtec",
    "HOOD": "RobinhoodApp",
    "LCID": "LucidMotors",
    "NVAX": "Novavax",
    "MRNA": "moderna_tx",
    "NFLX": "Netflix",
    "BA": "Boeing",
    "GOOG": "Google",
    "GOOGL": "Google",
    "BAC": "BankofAmerica",
    "BNTX": "BioNTech_Group",
    "DIS": "Disney",
    "SBUX": "Starbucks",
    "INTC": "intel",
    "AAL": "AmericanAir",
    "COKE": "CocaCola",
    "MCD": "McDonalds",
    "C": "Citi",
    "T": "ATT",
    "V": "Visa",
    "PEP": "pepsi",
    "NKE": "Nike",
    "JPM": "jpmorgan",
    "ADBE": "Adobe",
    "WMT": "Walmart",
    "IBM": "IBM",
    "GS": "GoldmanSachs",
    "SHOP": "Shopify",
    "TWLO": "Twilio",
    "Z": "zillow",
    "CRWD": "CrowdStrike",
    "SNOW": "SnowflakeDB",
    "NET": "Cloudflare",
    "WEN": "Wendys",
    "DPZ": "dominos",
    "PINS": "Pinterest",
    "ORCL": "Oracle",
    "UA": "UnderArmour",
    "LUMN": "lumentechco",
    "JD": "JD_Corporate",
    "CSCO": "Cisco",
    "JNJ": "JNJNews",
    "PFE": "pfizer_news",
    "ZM": "Zoom",
    "SPOT": "Spotify",
    "MSTR": "MicroStrategy",
    "UBER": "UBER",
    "CRM": "salesforce",
    "AXP": "AmericanExpress",
    "GM": "GM",
    "GE": "generalelectric",
    "HD": "HomeDepot",
    "IPB": "MerrillLynch",
    "WFC": "wellsfargo",
    "ABT": "abbottglobal",
    "EXC": "exelon",
    "GPS": "gap",
    "ODP": "OfficeDepot",
    "STX": "SEAGATE",
    "XLNX": "XilinxInc",
    "S": "SentinelOne",
    "RIDE": "LordstownMotors",
    "RACE": "ScuderiaFerrari",
    "TM": "Toyota",
    "MU": "MicronTech",
    "QCOM": "Qualcomm",
    "STM": "ST_World",
    "AMCX": "AMC_TV",
    "MANU": "ManUtd",
    "CIDM": "Cinedigm",
    "BBY": "BestBuy",
    "BBBY": "BedBathBeyond",
    "BLNK": "BlinkCharging",
    "BODY": "Beachbody",
    "TTM": "TataMotors",
    "TTD": "TheTradeDesk",
    "MCFE": "McAfee",
    "CHWY": "Chewy",
    "UPST": "Upstart",
    "DB": "DeutscheBank",
    "MDB": "MongoDB",
    "NEGG": "Newegg",
    "PTRA": "Proterra_Inc",
    "PTON": "onepeloton",
    "FSLY": "fastly",
    "SENS": "senseonics",
    "WOOF": "Petco",
    "AI": "C3_AI",
    "PSFE": "PlugIntoPaysafe",
    "RIOT": "RiotBlockchain",
    "FUTU": "moomooApp",
    "LAZR": "luminartech",
    "PDD": "PinduoduoInc",
    "BARK": "barkbox",
    "EBAY": "eBay",
    "LYFT": "lyft",
    "MARA": "MarathonDigitalHoldings",
    "TSM": "TaiwanSemiconductor",
    "LODE": "ComstockMining",
    "USAS": "AmericasGoldandSilverCorporation",
    "CLSK": "CleanSpark",
    "CYDY": "CytoDyn",
}
date_updated = str(datetime.now()).split()[0]


def main():
    for symbol, account in interested_accounts.items():
        url = "https://api.twitter.com/1.1/users/show.json?screen_name={}".format(account)
        json_response = connect_to_endpoint(url)
        print("Twitter account of: ", symbol, json_response["followers_count"])
        cur.execute("INSERT IGNORE INTO twitter_followers VALUES (%s, %s, %s)",
                    (symbol, json_response["followers_count"], date_updated))
        cnx.commit()
        time.sleep(1)


if __name__ == "__main__":
    main()
