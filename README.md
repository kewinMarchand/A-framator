# A-Framator

Éditeur de scènes WebGL dans le navigateur : on ajoute des primitives A-Frame à une scène 3D via un menu d'outils et un panneau de réglages.

Démo : https://kewinmarchand.github.io/A-framator/

## Fonctionnalités

- Scène de départ avec une caméra, un curseur et un sol texturé (`sol.png`).
- Menu d'outils pour ajouter un ciel, un plan, un cube, une sphère, un cylindre ou un tore.
- Panneau de réglages prérempli selon la primitive : couleur, position (X, Y, Z), rotation (X, Y, Z), longueur, largeur, profondeur, rayon et nom.
- Chaque objet validé est ajouté à la scène et listé dans le panneau des calques.

## Stack

- [A-Frame](https://aframe.io/) 0.3.2 (CDN aframe.io)
- jQuery 3.1.1 (CDN Google)
- HTML, CSS et JavaScript sans build, police Roboto (Google Fonts)

## Lancer en local

Le projet est statique. Servir le dossier avec un serveur HTTP, par exemple :

```sh
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000. Une connexion internet est nécessaire pour charger A-Frame, jQuery et la police.

## Structure

```
index.html      scène A-Frame, menu d'outils, calques et panneau de réglages
js/script.js    logique de l'éditeur (jQuery)
css/style.css   styles de l'interface
img/            icônes SVG des outils
sol.png         texture du sol
_config.yml     thème Jekyll de GitHub Pages
```

## État du projet

Prototype non maintenu, dernier commit le 26 septembre 2017. Non implémenté : la sélection et la modification d'un objet depuis les calques (code commenté dans `js/script.js`), la suppression d'objets et l'export de la scène. Les boutons « outils » et « calques » n'ont pas d'action dédiée.

## Licence

MIT, voir [LICENSE](LICENSE).
