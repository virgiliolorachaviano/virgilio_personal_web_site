# 🏡 Real Estate Analytics Pipeline

This project is designed to analyze public and private real estate data (NJ Realtors, Zillow, Redfin, U.S. Census) to deliver actionable insights for clients in the housing sector.

## 📊 Workflow
1. Fetch data from public APIs (Census) and download public datasets (Zillow, Redfin).
2. Clean and transform data using dbt (raw → staging → marts).
3. Run data quality tests (dbt tests).
4. Visualize insights in dashboards (Power BI / Tableau).

## 🛠 Tech Stack
- Python (requests, pandas)
- dbt (data transformation)
- DuckDB / BigQuery (data warehouse)
- Power BI / Tableau (visualizations)
- GitHub Actions (CI/CD for testing and deployment)

## 🚀 Running the scripts
1. Install dependencies: `pip install -r requirements.txt`
2. Set your API keys in environment variables.
3. Run fetchers:
    - Census: `python scripts/fetch_census.py`
    - Zillow: `python scripts/fetch_zillow.py`
    - Redfin: `python scripts/fetch_redfin.py`
    - NJ Realtors: `python scripts/fetch_nj_realtors.py`