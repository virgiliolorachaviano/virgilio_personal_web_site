import requests

def download_nj_realtors_report(file_url, save_path):
    print(f"Downloading NJ Realtors report from {file_url}...")
    response = requests.get(file_url)
    response.raise_for_status()
    with open(save_path, 'wb') as f:
        f.write(response.content)
    print(f"Report saved to {save_path}")

if __name__ == "__main__":
    url = "https://www.njrealtor.com/wp-content/uploads/2025/05/NJ_Market_Report_May_2025.pdf"
    path = "../data/raw/NJ_Market_Report_May_2025.pdf"
    download_nj_realtors_report(url, path)