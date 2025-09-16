from flask import Flask, jsonify, request
import openrouteservice
from Utils import get_coords  

app = Flask(__name__)

# Route pour les coordonnées d'une ville
@app.route('/coords/<city>')
def coords_route(city):
    coords = get_coords(city)
    if coords:
        lat, lon = coords
        return jsonify({"ville": city, "latitude": lat, "longitude": lon})
    else:
        return jsonify({"error": "Ville non trouvée"}), 404

# Configuration OpenRouteService
API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImRkMWJhZDVmMzgxYTRhOTBiZTYxNzVlNTVjZmE3YjYyIiwiaCI6Im11cm11cjY0In0="  
client = openrouteservice.Client(key=API_KEY)

# Route pour la distance routière entre deux villes
@app.route('/distance')
def distance_routiere():
    # Récupération des paramètres GET
    city_from = request.args.get('from')
    city_to = request.args.get('to')

    if not city_from or not city_to:
        return jsonify({"error": "Veuillez fournir les paramètres 'from' et 'to'"}), 400

    # Récupération des coordonnées via Utils.py
    coords_from = get_coords(city_from) 
    coords_to = get_coords(city_to)

    if not coords_from or not coords_to:
        return jsonify({"error": "Ville non trouvée"}), 404

    # Conversion en (lon, lat) pour OpenRouteService
    coords_from = (coords_from[1], coords_from[0])
    coords_to = (coords_to[1], coords_to[0])

    # Calcul de la distance routière
    route = client.directions([coords_from, coords_to], profile='driving-car')
    distance_m = route['routes'][0]['summary']['distance']

    return jsonify({
        "from": city_from,
        "to": city_to,
        "distance_km": round(distance_m / 1000, 2)
    })


if __name__ == '__main__':
    app.run(debug=True)
