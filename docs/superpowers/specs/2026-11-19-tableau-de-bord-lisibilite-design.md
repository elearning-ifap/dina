# Tableau de bord DINA : lisibilité par public (conception)

Date : 19-11-2026. Statut : en attente d'approbation de Marc.
Fichiers concernés : `pilotage/livrables.js` (données), `pilotage/pilotage.js` (rendu), `pilotage/index.html`, `pilotage/pilotage.css`.

## Intention
Le tableau de bord sert trois publics : Marc (production), Marie-Noëlle Blanck (relectures et validations) et la direction (avancement en un coup d'œil). Aujourd'hui la page empile une douzaine de sections, 7 livrables sur 83 ont un lien, et l'indicateur d'intégration LIANE a longtemps affiché « 0 sur 8 » alors que le travail était engagé. Marc doit pouvoir dire en dix secondes où en est le projet, et Marie-Noëlle doit ouvrir en un clic le document à relire.

## Objectifs
- Un indicateur global de progression en pourcentage, avec le nombre de livrables terminés sur le total.
- Un pourcentage d'avancement par groupe de livrables (Cadrage, Ressources et évaluations, Plateforme LIANE, Suivi du pilote, Communication, Suivi administratif et financier, Visuels).
- Trois vues par onglet : Direction, Marie-Noëlle, Production.
- Un lien « Ouvrir » sur chaque livrable et chaque action qui a un document (Google Doc commentable, fichier Drive, dossier d'images).
- Une seule source de données : une mise à jour de `livrables.js` alimente les trois vues.

## Hors objectifs
- Pas de nouvel outil ni d'hébergement (pas de tableur, pas de Notion).
- Pas de pages séparées : l'adresse publique actuelle reste la seule.
- Pas de changement de la logique de saisie du temps ni des statuts existants.

## À éviter
- Une vue qui masque un retard (un pourcentage flatteur sans détail accessible).
- Un lien « Ouvrir » qui mène à une impasse : un lien manquant doit se voir.

## Approches considérées
- **A. Onglets dans la page actuelle (retenue par Marc).** Réutilise données et rendu ; coût : réorganisation du rendu.
- B. Trois pages générées. Écartée : trois adresses à diffuser et à maintenir.
- C. Tableur ou Notion. Écartée : perd le calcul, la mise à jour par Claude et l'adresse déjà diffusée.

## Conception

### Haut de page, commun aux trois onglets
- Pourcentage global ; « N / 83 livrables terminés » ; temps consommé sur les 32 j (déjà calculé).
- Une barre par groupe de livrables avec son pourcentage et « n / total terminés ».
- Calcul (choix de Claude, à corriger) : moyenne pondérée des statuts avec la pondération existante (`ponderation` : à faire 0, en cours 0,5, à valider 0,8, validé ou livré 1). Le pourcentage global est la moyenne sur tous les livrables.
- Les indicateurs existants (production, déploiement, intégration LIANE, temps) restent, repliés sous ce haut de page.

### Onglet Direction
Synthèse, prochains jalons, jalons jusqu'à l'ouverture, « En attente de » (arbitrages), alertes. Rien d'autre.

### Onglet Marie-Noëlle
Liste des éléments dont elle est la validatrice (`valide: "mnb"`) ou l'actrice (`qui: "mnb"`), avec statut, échéance et bouton « Ouvrir ». Les éléments sans lien affichent « lien à fournir ». Les actions de modules qui lui reviennent (relire un storyboard, valider un corpus) y figurent aussi.

### Onglet Production
Prochaines priorités, tâches de Marc en cours, avec lien vers le fichier source. Liste des visuels à produire (groupe Visuels, statuts « à faire » et « en cours »). Détail repliable : matrice module par module, groupes de livrables, pistes d'évolution du moteur, liste complète des livrables.

### Données
- Champ `lien` (et `lienTexte`) déjà présent sur les livrables ; l'ajouter aussi aux actions de modules.
- Un livrable ou une action peut avoir plusieurs liens : accepter un tableau `liens: [{ texte, url }]` en plus de `lien`.
- Règle de lien manquant : tout élément « à valider » ou attendu de Marie-Noëlle sans lien est signalé (réutiliser le bloc `alertes-liens` existant).

### Accessibilité et mobile
Onglets au clavier, rôles ARIA `tablist`, texte de contraste suffisant, rendu lisible sur téléphone (la direction consulte souvent sur mobile).

## Contraintes
- Les adresses Google Docs viennent de Marc : Claude n'a pas accès au Drive IFAP et ne peut pas créer de lien.
- Les docs relus par Marie-Noëlle doivent être des Google Docs commentables, pas des fichiers .md.
- La page publique ne doit contenir aucune donnée nominative sensible (inchangé).

## Laissé au réalisateur
Libellés exacts des onglets, couleurs des barres, ordre des groupes, présentation repliée ou non du détail, gestion de l'onglet actif dans l'adresse (`#direction`, `#mnb`, `#production`).

## Questions ouvertes
Aucune qui bloque. Choix de Claude à relire : la pondération pour le pourcentage global ; l'attribution des éléments à l'onglet de Marie-Noëlle par les champs `valide` et `qui`.
