# TP4 – Réponses aux exercices

## PartieA :Installation et premiers pas
**Question1 : Pourquoi tester sur plusieurs navigateurs est-il important ?**
**Réponse:** Chaque navigateur (Chromium, Firefox, WebKit) possède son propre moteur de rendu et peut interpréter différemment le code HTML, CSS ou JavaScript.
Tester sur plusieurs navigateurs garantit que l’application fonctionne correctement et de manière cohérente pour tous les utilisateurs, quel que soit leur environnement.

**Question2 : Comment Playwright gère-t-il automatiquement les temps d’attente entre actions ? **
**Réponse :** Playwright utilise un système de smart waiting :
il attend automatiquement que les éléments soient prêts (visibles, interactifs, attachés au DOM) avant d’exécuter une action ou une vérification.
Cela évite d’avoir à mettre des wait() ou sleep() manuels et rend les tests plus stables et fiables.


## Questions de réflexion — Partie B
**1. Comment gérer les éléments qui apparaissent ou disparaissent dynamiquement ?**
**Réponse :** On utilise les locators Playwright avec des assertions qui attendent automatiquement (toBeVisible(), toHaveCount()). Cela permet d’attendre que l’élément soit présent ou disparaisse sans provoquer d’erreurs.

**2. Quand utiliser une assertion stricte (toHaveText) ou partielle (toContainText) ?**
**Réponse :** - toHaveText() → quand on connaît exactement le texte attendu.
- toContainText() → quand le texte peut contenir d’autres informations dynamiques, mais qu’on veut vérifier une partie spécifique.

**3. Quels pièges pouvez-vous rencontrer avec les frames et comment les éviter ?**
**Réponse: ** La frame peut ne pas être encore chargée ou le sélecteur à l’intérieur peut changer.
Pour éviter cela, on attend que la frame soit disponible (page.frame(...)) et on utilise frame.locator() pour cibler les éléments correctement.

**Comment rendre vos tests stables malgré des animations ou temps de chargement variables ?**
**Réponse :** - Utiliser les attentes automatiques de Playwright (toBeVisible, toHaveText) au lieu de sleep.
            - Choisir des sélecteurs fiables (id, data-testid) pour réduire les erreurs liées aux animations ou au chargement.

## Questions de réflexion — Partie C

**1. Quels sont les avantages du Page Object Model dans un projet de tests complexe ?**
**Réponse :Le POM centralise les sélecteurs et méthodes pour chaque page. Les tests deviennent plus lisibles et faciles à maintenir. Si un élément change, il suffit de le modifier dans la classe POM, pas dans tous les tests.

**2. Comment les tests paramétrés améliorent-ils la couverture fonctionnelle ?**

**Réponse :** Ils permettent de tester plusieurs scénarios avec le même code.
On peut vérifier différentes combinaisons de données (ex: login correct / incorrect).
Cela réduit le risque d’oublier des cas de test importants.

**3. Pourquoi et quand utiliser le mocking d’API dans un projet réel ?**

**Réponse :** Pour simuler des réponses réseau sans dépendre d’un vrai serveur. Utile quand l’API est instable, lente ou indisponible. Permet de tester des scénarios spécifiques et erreurs de manière contrôlée.

**4. Comment vérifier que le comportement de l’application est correct même avec des données simulées ?**

**Réponse : ** Vérifier que les éléments affichés correspondent aux données mockées.
Utiliser des assertions sur le contenu ou l’état des éléments.
Cela assure que l’application réagit correctement aux réponses attendues ou inattendues.

## Questions de réflexion – partie D
**Question: Comment analyser un fichier de trace avec Playwright ?**

**Réponse : ** On ouvre la trace avec : npx playwright show-trace trace.zip
→ Permet de voir étape par étape ce que le test a fait (captures, DOM, actions).

**Question : Quels avantages la CI apporte-t-elle à la qualité logicielle ?**

**Réponse :** - Automatisation des tests à chaque push → détecte rapidement les bugs.
            - Standardisation et reproductibilité des tests.
            - Permet de vérifier que les nouvelles modifications ne cassent rien.