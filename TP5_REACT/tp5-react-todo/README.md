# TP React : To-Do List

- Cette application est une **To-Do List** interactive développée avec **React**.
- Elle permet d’ajouter, cocher/décocher et supprimer des tâches.
- Le projet utilise les concepts fondamentaux de React : **composants**, **props**, **état (useState)** et **événements**

## Installation

#### 1. Cloner le projet depuis GitHub

```bash
git clone <https://github.com/Magatte805/COURS_Apprentissage_pour_le_web.git>

#### 2. Installer les dépendances :

```bash
npm install


#### 3. Lancer l’application :

```bash
npm start

L’application s’ouvrira automatiquement dans le navigateur à l’adresse http://localhost:3000


## Fonctionnalités

- Ajouter une tâche via le champ texte et le bouton “Ajouter”
- Cocher/décocher une tâche (texte barré)
- Supprimer une tâche
- Compteur des tâches restantes
- Filtrer les tâches : Toutes / Actives / Terminées
- Sauvegarde automatique des tâches avec localStorage

## Notes

- Projet structuré avec des composants React réutilisables (App.js, TodoItem.js)
- L’état des tâches est centralisé dans App.js et passé aux composants enfants via props