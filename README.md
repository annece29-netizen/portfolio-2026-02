# Portfolio — Anne-Cécile Le Dain

Portfolio personnel hébergé sur GitHub Pages.
**URL en ligne :** https://annece29-netizen.github.io/portfolio-2026-02

---

## Journal de bord — Ce qu'on a construit ensemble

### Le point de départ
Anne-Cécile Le Dain, ancienne restauratrice en reconversion vers l'IA et l'automatisation, voulait une page portfolio à partager via lien ou QR code. Pas une page de vente — un espace sobre et élégant pour montrer ses compétences et ses projets concrets.

### Les choix de design
- **Couleurs :** fond sombre `#272030`, rose poudré `#c79a99`, bleu-grisé `#e3ebf2`
- **Police :** DM Sans (texte courant) + Caveat (annotations manuscrites dans le mockup)
- **Style :** sombre, épuré, professionnel — pas "geek", pas "startup"
- **Aucun framework** : HTML, CSS et JavaScript purs, pour rester léger et maintenable

### La structure du site
Un site multi-pages :
- `index.html` — page principale avec navigation, hero, à propos, compétences, projets, en ce moment, contact
- 4 pages de projets détaillées dans le dossier `projets/`
- Une page `maintenance.html` pour mettre le site en pause proprement

### Les 4 projets présentés

**1. Inventaire Vocal** (`projets/inventaire-vocal.html`)
Un outil qui permet à un traiteur de dicter son inventaire à voix haute sur Telegram et de recevoir un export Google Sheets structuré avec les prix, en moins de 15 secondes. Construit avec n8n, l'API OpenAI et Google Sheets. Statut : en test réel. La page contient un mockup HTML animé du Google Sheets, avec des barres de confiance, des badges auto/révision/échec, et un panneau d'annotations — intégré depuis un fichier fourni par Claude Cowork, avec des classes CSS préfixées `mk-` pour éviter les conflits de style.

**2. Assistants ChatGPT Communication** (`projets/assistants-communication.html`)
Trois assistants GPT personnalisés créés pour l'équipe communication d'une entreprise greentech (Cool Roof) : un assistant LinkedIn, un assistant Blog SEO, un assistant FAQ. La page contient un visuel Canva montrant les trois cartes d'assistants.

**3. Automatisations n8n** (`projets/automatisations-n8n.html`)
Présentation de la montée en compétences sur n8n à travers une formation et des projets réels. Quatre captures de workflows réels (créées dans Canva) affichées en pleine largeur les unes sous les autres, car les workflows sont en format paysage et doivent rester lisibles.

**4. Livre Intergénérationnel** (`projets/livre-intergenerationnel.html`)
Teaser volontairement minimal pour protéger l'idée. Juste l'essentiel : ce que c'est, où j'en suis.

### Les fichiers créés
```
portfolio-2026-02/
├── index.html
├── maintenance.html
├── style.css
├── script.js
├── projets/
│   ├── inventaire-vocal.html
│   ├── assistants-communication.html
│   ├── automatisations-n8n.html
│   └── livre-intergenerationnel.html
├── images/
│   ├── anne-cecile-hero.jpg
│   ├── anne-cecile-action.jpg
│   └── projets/
│       ├── inventaire-telegram.png
│       ├── inventaire-workflow.png
│       ├── assistant-gpt.png
│       ├── n8n-workflow-1.png
│       ├── n8n-workflow-2.png
│       ├── n8n-workflow-3.png
│       └── n8n-workflow-4.png
└── README.md
```

### La mise en ligne — les étapes qu'on a traversées
1. Création des fichiers HTML/CSS/JS en local
2. Intégration des visuels créés dans Canva (placés dans `images/projets/`)
3. Ouverture de PowerShell depuis le dossier portfolio
4. `git init` pour initialiser le dépôt local
5. `git remote add origin https://github.com/annece29-netizen/portfolio-2026-02.git` pour connecter à GitHub
6. `git add .` + `git commit` + `git push origin master`
7. Passage du repo en **public** (Settings → General → Danger Zone) car GitHub Pages gratuit ne fonctionne qu'avec les repos publics
8. Activation de GitHub Pages (Settings → Pages → branche master)
9. Correction des noms de fichiers images (extensions doublées lors de l'enregistrement Canva)
10. Nouveau push → **site en ligne** ✅

---

## Mettre à jour le site

Après chaque modification, envoie les changements sur GitHub avec ces 3 commandes dans PowerShell :

```
git add .
git commit -m "Description de ce que tu as modifié"
git push origin master
```

Le site se met à jour en 1 à 2 minutes.

---

## Mettre le site EN PAUSE (mode maintenance)

Dans l'Explorateur Windows, dans le dossier `portfolio-2026-02/` :
1. Renomme `index.html` en `index-backup.html`
2. Renomme `maintenance.html` en `index.html`

Puis dans PowerShell :
```
git add .
git commit -m "Activation mode maintenance"
git push origin master
```

### Remettre le site EN LIGNE

1. Renomme `index.html` en `maintenance.html`
2. Renomme `index-backup.html` en `index.html`

Puis dans PowerShell :
```
git add .
git commit -m "Remise en ligne du portfolio"
git push origin master
```

---

## Modifier le contenu

### Changer le texte "En ce moment"
Ouvre `index.html`, trouve la section `id="en-ce-moment"` et modifie les paragraphes entre les balises `<p>` et `</p>`.

### Modifier une étude de cas
Ouvre le fichier correspondant dans `projets/` et modifie le texte directement. Astuce : Ctrl+H dans le Bloc-notes pour chercher/remplacer.

### Ajouter une nouvelle image dans un projet
1. Copie l'image dans `images/projets/`
2. Dans le fichier HTML du projet, remplace le bloc placeholder par :
```html
<figure class="visuel-projet">
  <img src="../images/projets/nom-de-ton-image.png" alt="Description" loading="lazy" />
  <figcaption>Légende</figcaption>
</figure>
```

---

## Couleurs du portfolio (pour référence Canva)

| Nom | Code hex |
|-----|----------|
| Fond principal | `#272030` |
| Rose poudré | `#c79a99` |
| Bleu grisé clair | `#e3ebf2` |
| Texte principal | `#d4ccd8` |

---

## Contact & liens
- Email : annececile29@gmail.com
- LinkedIn : https://linkedin.com/in/ance29/
- Substack : https://annec266799.substack.com
