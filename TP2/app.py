from flask import Flask, jsonify
import requests
from flask import request
import openrouteservice

app = Flask(__name__)


@app.route('/coords/<city>')
def get_coords(city):
    url = "https://nominatim.openstreetmap.org/search"
    params = {"q": city, "format": "json"}
    headers = {"User-Agent": "TP2-Flask-App"}
    response = requests.get(url, headers=headers, params=params)
    
    if response.status_code == 200 and response.json():
        data = response.json()[0]
        return jsonify({
            "ville": city,
            "latitude": data['lat'],
            "longitude": data['lon']
        })
    else:
        return jsonify({"error": "Ville non trouvée"}), 404
    
API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImRkMWJhZDVmMzgxYTRhOTBiZTYxNzVlNTVjZmE3YjYyIiwiaCI6Im11cm11cjY0In0="  
client = openrouteservice.Client(key=API_KEY)

@app.route('/distance')
def distance_routiere():
    # Récupération des paramètres GET
    city_from = request.args.get('from')
    city_to = request.args.get('to')

    if not city_from or not city_to:
        return jsonify({"error": "Veuillez fournir les paramètres 'from' et 'to'"}), 400

    # Fonction pour récupérer coordonnées via Nominatim
    def get_coords(city):
        url = "https://nominatim.openstreetmap.org/search"
        params = {"q": city, "format": "json"}
        headers = {"User-Agent": "TP2-Flask-App"}
        response = requests.get(url, headers=headers, params=params)
        if response.status_code == 200 and response.json():
            data = response.json()[0]
            return float(data['lon']), float(data['lat']) 
        return None

    coords_from = get_coords(city_from)
    coords_to = get_coords(city_to)

    if not coords_from or not coords_to:
        return jsonify({"error": "Ville non trouvée"}), 404

    # Calcul de la distance routière avec OpenRouteService
    route = client.directions([coords_from, coords_to], profile='driving-car')
    distance_m = route['routes'][0]['summary']['distance']

    return jsonify({
        "from": city_from,
        "to": city_to,
        "distance_km": round(distance_m / 1000, 2)
    })

if __name__ == '__main__':
    app.run(debug=True)
