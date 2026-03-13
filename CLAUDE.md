# CLAUDE.md — Projet Portfolio ACLD

Fichier de contexte pour Claude Code. À lire en début de session.

---

## Ce qu'est ce projet

Site portfolio personnel d'Anne-Cécile Le Dain, hébergé sur GitHub Pages.
Pas une page de vente — un espace sobre pour montrer ses compétences et projets concrets.

**URL en ligne :** https://annece29-netizen.github.io/portfolio-2026-02

---

## État actuel

- En ligne sur GitHub Pages (branche `master`)
- 4 projets présentés : Inventaire Vocal, Assistants ChatGPT, Automatisations n8n, Livre Intergénérationnel
- SEO et GEO à améliorer (pas prioritaire pour l'instant)

---

## Stack technique

- HTML, CSS, JavaScript purs (aucun framework)
- Hébergement : GitHub Pages (repo public)
- Repo GitHub : `annece29-netizen/portfolio-2026-02`

---

## Structure des fichiers

```
portfolio-acld/
├── index.html              ← page principale
├── maintenance.html        ← page de maintenance (si site en pause)
├── style.css
├── script.js
├── projets/
│   ├── inventaire-vocal.html
│   ├── assistants-communication.html
│   ├── automatisations-n8n.html
│   └── livre-intergenerationnel.html
└── images/
    ├── anne-cecile-hero.jpg
    ├── anne-cecile-action.jpg
    └── projets/            ← captures et visuels des projets
```

---

## Charte graphique

| Élément | Valeur |
|---------|--------|
| Fond principal | `#272030` |
| Rose poudré | `#c79a99` |
| Bleu grisé | `#e3ebf2` |
| Texte | `#d4ccd8` |
| Police | DM Sans (corps) + Caveat (annotations) |

---

## Mettre à jour le site

Après chaque modification, depuis PowerShell dans le dossier du projet :

```
git add .
git commit -m "Description de la modification"
git push origin master
```

Le site se met à jour en 1 à 2 minutes.

---

## Rôle de Claude sur ce projet

- Modifier le contenu HTML (textes, projets, section "En ce moment")
- Améliorer le SEO (balises meta, titres, descriptions) — quand demandé
- Améliorer le GEO (optimisation pour moteurs IA) — quand demandé
- Ajouter un nouveau projet ou une nouvelle section
- Corriger des bugs d'affichage CSS/JS
- Expliquer pas à pas les manipulations Git si besoin

---

## Règles

- Ne jamais modifier les couleurs ou la typographie sans accord explicite
- Toujours tester en local avant de proposer un push
- Expliquer chaque commande Git si Anne-Cécile ne l'a pas demandée elle-même
- Garder le code simple — pas de frameworks, pas de dépendances inutiles
