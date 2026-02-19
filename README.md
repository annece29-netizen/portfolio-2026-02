# Portfolio — Anne-Cécile Le Dain

Portfolio personnel hébergé sur GitHub Pages.
**URL en ligne :** https://annece29-netizen.github.io/portfolio-2026-02

---

## Structure des fichiers

```
portfolio-2026-02/
├── index.html                        ← Page principale
├── maintenance.html                  ← Page de pause (voir section dédiée)
├── style.css                         ← Styles (couleurs, polices, mise en page)
├── script.js                         ← Navigation et animations
├── projets/
│   ├── inventaire-vocal.html
│   ├── assistants-communication.html
│   ├── automatisations-n8n.html
│   └── livre-intergenerationnel.html
├── images/
│   ├── anne-cecile-hero.jpg          ← Ta photo principale (à ajouter)
│   ├── anne-cecile-action.jpg        ← Photo en présentation (à ajouter)
│   └── projets/                      ← Captures d'écran des projets
│       ├── inventaire-telegram.png
│       ├── inventaire-workflow.png
│       ├── inventaire-sheets.png
│       └── [autres captures]
└── README.md                         ← Ce fichier
```

---

## Ajouter tes photos

1. Renomme ta photo blazer kaki en : `anne-cecile-hero.jpg`
2. Renomme ta photo en présentation en : `anne-cecile-action.jpg`
3. Copie ces deux fichiers dans le dossier `images/`
4. Pour les captures des projets, copie-les dans `images/projets/` avec les noms indiqués ci-dessus

Les placeholders gris disparaîtront automatiquement une fois les images en place.

---

## Mettre à jour le site

Après chaque modification, envoie les changements sur GitHub avec ces 3 commandes :

```bash
git add .
git commit -m "Description de ce que tu as modifié"
git push origin main
```

Le site se met à jour en 1 à 2 minutes.

---

## Mettre le site EN PAUSE (mode maintenance)

Quand tu veux que le site affiche "En cours de mise à jour" :

**Étape 1** — Renommer les fichiers :
```bash
mv index.html index-backup.html
mv maintenance.html index.html
```

**Étape 2** — Envoyer sur GitHub :
```bash
git add .
git commit -m "Activation mode maintenance"
git push origin main
```

## Remettre le site EN LIGNE

```bash
mv index.html maintenance.html
mv index-backup.html index.html
git add .
git commit -m "Remise en ligne du portfolio"
git push origin main
```

---

## Modifier le contenu

### Changer le texte "En ce moment"
Ouvre `index.html` et trouve la section `id="en-ce-moment"`.
Modifie les paragraphes entre les balises `<p>` et `</p>`.

### Modifier une étude de cas
Ouvre le fichier correspondant dans le dossier `projets/` et modifie le contenu des sections.

### Ajouter une capture d'écran
1. Copie l'image dans `images/projets/`
2. Dans le fichier HTML du projet, remplace le bloc `<div class="img-placeholder">` par :
```html
<figure class="visuel-projet">
  <img src="../images/projets/nom-de-ton-image.png" alt="Description de l'image" />
  <figcaption>Légende de l'image</figcaption>
</figure>
```

---

## Activer GitHub Pages (première fois)

1. Va sur https://github.com/annece29-netizen/portfolio-2026-02
2. Clique sur **Settings** (onglet en haut)
3. Dans le menu gauche, clique sur **Pages**
4. Sous "Source", sélectionne **Deploy from a branch**
5. Choisis la branche **main** et le dossier **/ (root)**
6. Clique sur **Save**
7. Attends 2-3 minutes → ton site est en ligne à l'URL ci-dessus

---

## Couleurs du portfolio (pour référence Canva)

| Nom | Code hex |
|-----|----------|
| Fond principal | `#272030` |
| Rose poudré | `#c79a99` |
| Bleu grisé clair | `#e3ebf2` |
| Texte principal | `#d4ccd8` |
