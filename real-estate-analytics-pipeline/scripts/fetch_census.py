import requests
import pandas as pd

def fetch_census_data(api_key: str, state_code: str = "34"):
    url = "https://api.census.gov/data/2020/acs/acs5"
    params = {"get": "NAME,B25077_001E", "for": "county:*", "in": f"state:{state_code}", "key": api_key}
    print("Requesting data from US Census API...")
    response = requests.get(url, params=params)
    response.raise_for_status()
    data = response.json()
    df = pd.DataFrame(data[1:], columns=data[0])
    df.rename(columns={'B25077_001E': 'Median_Home_Value'}, inplace=True)
    df['Median_Home_Value'] = pd.to_numeric(df['Median_Home_Value'], errors='coerce')
    print("Data fetched successfully!")
    return df

if __name__ == "__main__":
    API_KEY = "YOUR_CENSUS_API_KEY"
    df = fetch_census_data(API_KEY)
    df.to_csv("../data/external/census_median_home_values.csv", index=False)
    print("Saved data to /data/external/census_median_home_values.csv")