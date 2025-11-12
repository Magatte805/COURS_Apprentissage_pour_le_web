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

## Partie C : Gestion de l’état (useState) et interactions

**Question 1: Quelle différence entre modifier une variable et mettre à jour un état React?**

**Réponse :** - Modifier une variable change seulement cette valeur locale immédiate.
            -    Mettre à jour un état React (via setState/useState) informe React qu’il doit re-render le composant et propager la nouvelle valeur dans l’UI.

**Question2 : Pourquoi ne faut-il pas modifier directement un tableau d’état?**

**Réponse :** Parce que modifier le tableau en place ne change pas la référence ; React peut ne pas détecter la modification et ne pas re-render. On doit créer une nouvelle copie et passer cette copie à setTodos.


## Partie D: Styling et amélioration

**Question1 : Comment les props permettent-elles la communication entre composants?**

**Réponse :** Les props permettent de transmettre des données ou des fonctions d’un composant parent vers un composant enfant. Elles assurent la communication descendante entre les composants.


**Question2: Qu’est-ce qu’un "lifting state up" dans React?**

**Réponse :** C'est le fait de déplacer un état commun vers le composant parent afin que plusieurs composants enfants puissent le partager et rester synchronisés.


**Question3 :  Quels avantages le découpage en composants apporte-t-il?**

**Réponse :** Il rend le code plus clair, réutilisable et facile à maintenir. Chaque composant est indépendant et gère une partie spécifique de l’interface.

