import pandas as pd

def fetch_redfin_data():
    url = "https://redfin-public-data.s3-us-west-2.amazonaws.com/redfin_market_tracker/state_market_tracker.tsv000.gz"
    print("Downloading Redfin dataset...")
    df = pd.read_csv(url, sep='\t')
    df_nj = df[df['state'] == 'New Jersey']
    print(f"Fetched {len(df_nj)} rows for New Jersey.")
    return df_nj

if __name__ == "__main__":
    df = fetch_redfin_data()
    df.to_csv("../data/external/redfin_market_data_nj.csv", index=False)
    print("Saved data to /data/external/redfin_market_data_nj.csv")