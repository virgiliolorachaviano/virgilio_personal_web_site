import pandas as pd

def fetch_zillow_data():
    url = "https://files.zillowstatic.com/research/public/Zip/Zip_MedianListingPrice_AllHomes.csv"
    print("Downloading Zillow dataset...")
    df = pd.read_csv(url)
    df_nj = df[df['StateName'] == 'New Jersey']
    print(f"Fetched {len(df_nj)} rows for New Jersey.")
    return df_nj

if __name__ == "__main__":
    df = fetch_zillow_data()
    df.to_csv("../data/external/zillow_median_prices_nj.csv", index=False)
    print("Saved data to /data/external/zillow_median_prices_nj.csv")