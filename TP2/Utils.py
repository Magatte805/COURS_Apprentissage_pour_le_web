import requests

def get_coords(city):
   
    url = "https://nominatim.openstreetmap.org/search"
    params = {"q": city, "format": "json"}
    headers = {"User-Agent": "TP2-Flask-App"}
    response = requests.get(url, headers=headers, params=params)
    if response.status_code == 200 and response.json():
        data = response.json()[0]
        return float(data['lat']), float(data['lon'])
    return None
