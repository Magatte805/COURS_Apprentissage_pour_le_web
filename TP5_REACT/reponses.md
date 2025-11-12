**TP5: Réponses aux Questions de réflexion**

## Partie A : Initialisation du projet
** Question1 : Qu’est-ce qu’un composant React?**
**Réponse :** C’est une brique de l’interface. Il affiche quelque chose à l’écran et peut recevoir des infos (props) ou gérer son état (state).

**Question2 : Quelle différence entre class component et function component?**
**Réponse : ** - Class component → basé sur une classe, plus long à écrire
                - Function component → basé sur une fonction, plus simple et moderne, utilise useState pour l’état

## Partie B :  Création des composants
**Question1:  Pourquoi est-il important de donner une clé unique (key) dans un .map()?**
**Réponse : ** Parce que React utilise la clé pour identifier chaque élément de la liste et mettre à jour le DOM efficacement.

**Question2 :Que se passerait-il si deux tâches avaient la même clé?**
**Réponse : ** React pourrait se tromper dans la mise à jour, entraînant des bugs ou des éléments mal affichés.
