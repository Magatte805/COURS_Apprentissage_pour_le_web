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
