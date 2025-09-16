
# TP1 Git – Réponses aux exercices

## Exercice 1 : Configuration de Git
**Question : Pourquoi est-il important que l’email Git soit le même que celui utilisé sur GitHub ?**  
**Réponse :** Parce que GitHub utilise l’email pour lier les commits à ton compte. Si l’email dans Git n’est pas le même que celui de GitHub, tes commits n’apparaîtront pas comme venant de toi.


## Questions de réflexion

1. **Quels sont les avantages d’un rebase par rapport à un merge ?**  
   - Le rebase permet de **réécrire l’historique** pour que les commits d’une branche apparaissent comme s’ils avaient été faits après ceux de la branche principale.  
   - L’historique devient **plus linéaire et facile à lire**.  
   - En revanche, le merge conserve l’historique exact des branches et crée un commit de fusion.

2. **Dans quel cas utiliseriez-vous un tag ?**  
   - Un tag sert à **marquer une version stable ou importante** d’un projet (par exemple `v1.0`, `v2.0`).  
   - Cela permet de revenir facilement à cette version ultérieurement ou de publier une release.

3. **Comment éviter les conflits de fusion dans un grand projet ?**  
   - Travailler sur des **branches séparées** pour chaque fonctionnalité ou correction.  
   - Faire des **pull fréquents** pour récupérer les changements des autres développeurs.  
   - Communiquer et planifier les modifications des fichiers partagés.  
   - Utiliser des outils comme les **pull requests** pour gérer les merges.

4. **Pourquoi est-il important d’avoir un fichier `.gitignore` bien configuré ?**  
   - Il permet d’**ignorer les fichiers temporaires, logs, ou fichiers sensibles** qui ne doivent pas être suivis par Git.  
   - Cela **évite d’encombrer le dépôt** avec des fichiers inutiles ou confidentiels.


