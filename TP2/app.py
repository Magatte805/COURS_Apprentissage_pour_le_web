from flask import Flask, jsonify
import requests

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

if __name__ == '__main__':
    app.run(debug=True)
