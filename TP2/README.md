# TP2 - API Géographique avec Flask

## 📌 Description
Ce projet est une API REST développée avec **Flask** permettant :
- D’obtenir les coordonnées GPS d’une ville (via **OpenStreetMap Nominatim**).
- De calculer la distance routière entre deux villes (via **OpenRouteService**).
- De consulter et gérer l’historique des recherches.

---

## ⚙️ Installation

### 1. Créer un environnement virtuel
Sous **Windows** :
```bash
py -m venv venv
venv\Scripts\activate
```

### 2. Installer les dépendances
pip install flask requests openrouteservice

### Utilisation : Lancer le serveur avec :
python app.py
## L’API sera disponible à l’adresse :
👉 http://127.0.0.1:5000/


## Documentation des endpoints

### 1. GET `/coords/<city>`
Retourne les coordonnées GPS (latitude, longitude) d’une ville.  

**Exemple :**  
```bash
http://127.0.0.1:5000/coords/Paris
```
**Réponse** :
{
  "latitude": "48.8534951",
  "longitude": "2.3483915",
  "ville": "Paris"
}

### 2. GET /distance?from=<ville1>&to=<ville2>
Retourne la distance routière (en kilomètres) entre deux villes.

**Exemple :** 
```bash
http://127.0.0.1:5000/distance?from=Paris&to=Londres
```

** Réponse : **
{
  "distance_km": 342.61,
   "from": "Paris",
  "to": "Londres"
}



### 3. GET /history
Retourne l’historique des recherches de distances.
**Exemple : **
```bash
http://127.0.0.1:5000/history
```
**Réponses : **
[
  {
    "distance_km": 342.61,
    "from": "Paris",
    "to": "Londres"
  },
  {
    "distance_km": 314.85,
     "from": "Lyon",
    "to": "Marseille"
  }
]

### 4. DELETE /history
Vide l’historique des recherches.
**Exemple: **
```bash
curl -X DELETE http://127.0.0.1:5000/history
```

**Réponses : ** 
{
  "message": "Historique vidé"
}

