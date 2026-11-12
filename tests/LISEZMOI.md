# tests/ — filet de non-régression DINA (T03)

Outil de développement. Rien de ce dossier n'est publié avec le produit (ni dans les paquets SCORM).

## À quoi ça sert

Quand on touche au moteur (`js/engine.js`), aux styles ou aux données, `rejouer.py` rejoue chaque module de bout en bout et dit si quelque chose a cassé. Il remplace les tests manuels.

Pour chacun des 6 modules (prologue, positionnement, M1, M2, M1 en pages, M2 en pages), il joue :

- une série **justes** (toutes les bonnes réponses) et une série **fausses** (toutes les mauvaises) ;
- à **1366 px** (ordinateur) et **390 px** (téléphone) ;
- avec une API SCORM 1.2 simulée, comme dans LIANE.

À chaque écran il contrôle :

| Contrôle | Ce qui fait échouer |
|---|---|
| Erreurs JS | une erreur JS ou un `console.error` (une image « ILL-… » pas encore déposée est tolérée : le moteur affiche son emplacement) |
| Débordement | un contenu plus large que l'écran, rogné, ou qui permet de défiler sur le côté (mesuré au repos, animations arrêtées) |
| Avancement | un écran où le bouton principal reste inactif après les bonnes actions |

À la fin de chaque parcours :

| Contrôle | Ce qui fait échouer |
|---|---|
| Taille de la sauvegarde | `cmi.suspend_data` de 4 096 caractères ou plus (limite SCORM 1.2). Le tableau affiche la taille maximale atteinte. |
| Reconstruction | on recharge la page, le moteur relit la sauvegarde, et l'état reconstruit (écran, étapes faites, réponses, carnet, historique) doit être identique à celui d'avant |

Le script rend le code de sortie `1` au moindre écart, `0` sinon.

## Installer et lancer

```
pip install playwright
playwright install chromium
```

Depuis la racine du dépôt :

```
python tests/rejouer.py                                  # tout : 6 modules x 2 séries x 2 largeurs
python tests/rejouer.py --module m1 --serie justes       # un module, une série
python tests/rejouer.py --largeur 390                    # le téléphone seulement
python tests/rejouer.py --auto-test                      # prouve que le filet échoue quand on casse un écran
```

## L'auto-test

`--auto-test` copie le produit dans un dossier jetable, y casse cinq choses une par une (erreur JS dans un écran, débordement à 390 px, sauvegarde trop grosse, reconstruction qui perd la progression, écran sans bouton) et vérifie que le filet les détecte. Le dépôt n'est jamais modifié. À relancer après toute modification de `rejouer.py`. Si le moteur change au point qu'une casse ne s'applique plus, le script le dit : mettre alors à jour `auto_test.py`.

## Quand ajouter un nouveau type d'écran

Le pilotage des écrans est dans `Joueur.jouer_ecran` (un cas par type d'écran) et `Joueur.page_defilante` (blocs des pages qui défilent). Un nouveau type d'écran sans cas dans `jouer_ecran` fait échouer le test avec « bloqué sur … » : c'est voulu, ça évite qu'un écran ne soit jamais testé.

## Limites

- C'est Chromium seul. Safari et Firefox ne sont pas testés.
- Le LMS est simulé : le script ne remplace pas un essai dans LIANE (Moodle) pour la remontée des notes.
- Les 390 px sont une largeur, pas un téléphone réel : pas de clavier virtuel, pas de barre d'adresse.
