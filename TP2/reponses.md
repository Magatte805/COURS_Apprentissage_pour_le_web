## Exercice 1 : Préparation de l’environnement et API de base

**Question : Pourquoi le mode `debug=True` est-il utile pendant le développement ?**  
**Réponse :**  
- Il permet à Flask de **recharger automatiquement** l’application dès qu’un fichier est modifié, sans avoir à relancer le serveur manuellement.  
- Il affiche des **messages d’erreur détaillés** dans le navigateur ou le terminal, ce qui facilite le **debugging** et la correction des problèmes pendant le développement.  
- Il est **pratique pour tester et itérer rapidement** sur le code.


## Exercice 2 : Coordonnées d’une ville

**Question : Pourquoi faut-il préciser `format=json` dans la requête à Nominatim ?**  
**Réponse :**  
- L’API Nominatim peut renvoyer plusieurs formats de réponse : XML, HTML, JSON, etc.  
- En précisant `format=json`, on obtient un **résultat JSON**, facile à manipuler avec Python et Flask.  
- Cela permet de traiter directement les données (latitude et longitude) dans l’application.


## Exercice 3 : Calcul de distance routière entre deux villes

**Question : Pourquoi est-il important de limiter le nombre d’appels à l’API OpenRouteService ?**  
**Réponse :**  
- Les APIs publiques comme OpenRouteService ont souvent **des quotas gratuits** (limite de requêtes par jour ou par minute).  
- Faire trop d’appels peut **bloquer l’accès temporairement** ou générer des erreurs.  
- Limiter les appels permet aussi de **réduire la charge sur le serveur** et d’éviter des temps de réponse plus longs.  
- Dans un projet réel, on utilise souvent **la mise en cache** pour réutiliser les résultats déjà obtenus et limiter les appels répétitifs.


## Exercice 4 : Améliorer la structure

**Question : Pourquoi est-il important de factoriser le code ?**  
**Réponse :**  
- Pour **éviter de répéter le même code** dans plusieurs endroits.  
- Pour faciliter la **maintenance** : si on change la logique, il suffit de la modifier **à un seul endroit**.  
- Pour améliorer la **lisibilité et la structure** du projet.  
- Pour permettre la **réutilisation du code** dans plusieurs fichiers ou projets.


## Questions de réflexion

**1. Quels sont les avantages de Flask par rapport à un framework plus lourd comme Django pour ce type de projet ?**  
- Flask est un **micro-framework léger**, idéal pour des APIs simples et rapides à mettre en place.  
- Moins de configuration et de fichiers, donc **plus rapide à démarrer**.  
- Plus de **flexibilité** pour organiser le projet selon ses besoins.  
- Parfait pour des **petits projets ou prototypes**, contrairement à Django qui est plus complet et structuré pour des applications complexes.

**2. Quelles bonnes pratiques appliquer pour nommer et documenter ses endpoints ?**  
- Utiliser des **noms clairs et descriptifs** (`/coords/<city>`, `/distance`).  
- Préférer des **routes en anglais** pour la cohérence et le partage.  
- Documenter les endpoints avec des **exemples de requêtes et réponses JSON**.  
- Indiquer les **paramètres GET ou POST** attendus.  
- Respecter une **structure RESTful** si possible (GET pour lecture, POST pour création…).

**3. Pourquoi limiter le nombre d’appels à des APIs externes ?**  
- Pour **éviter de dépasser les quotas gratuits** imposés par l’API.  
- Pour réduire la **latence** et améliorer la vitesse de l’application.  
- Pour **éviter de surcharger le serveur externe** et limiter les coûts si l’API est payante.  
- Pour sécuriser et contrôler le flux de données dans l’application.

**4. Comment sécuriser une clé API dans un projet collaboratif ?**  
- Ne jamais **mettre la clé directement dans le code source**.  
- Utiliser des **variables d’environnement** (`.env`) et un fichier `.gitignore` pour qu’il ne soit pas poussé sur Git.  
- Dans le code, récupérer la clé via `os.environ.get('API_KEY')`.  
- Ne partager la clé qu’avec les collaborateurs de confiance.
