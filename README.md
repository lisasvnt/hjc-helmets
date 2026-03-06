# Reproduction du site HJC Helmets - Tailwind + React

## Présentation du projet
Reproduction de la page d'accueil du site hjchelmets.us, une marque de casques de moto.

Structure générale: 
- Navbar: navigation responsive avec menu hamburger sur mobile
- Hero: section plein écran avec image de fond, titre et CTA
- Autres sections
- Footer: Newsletter, liens de navigations et réseaux sociaux

## Application des concepts d'ergonomie
Hiérarchie visuelle : titres très grands (heading-1) contrastés sur l'image de fond, sous-titres plus légers, boutons bien distincts
Charge cognitive limitée : contenu épuré, deux CTA principaux (LEARN MORE), un secondaire (RELATED PRODUCT)
Pattern de lecture Z : logo en haut à gauche, navigation en haut à droite, titre en bas à gauche, CTA en bas à gauche — typique d'une landing page
CTA mis en avant : bouton primaire avec forme inclinée (skew) pour attirer l'œil, hover sur tous les liens
Heuristiques de Nielsen : feedback visuel sur les interactions (hover), cohérence des couleurs via tokens CSS, navigation visible et accessible

## Accessibilité
WCAG : texte blanc sur fond sombre avec overlay bg-black/40 pour garantir un ratio de contraste suffisant ou texte noir sur fond blanc
Focus : éléments interactifs (<a>, <button>)
Contraste : couleurs définies via @theme pour assurer la cohérence sur toute l'app
Sémantique HTML : utilisation de <nav>, <section>, <footer>, <h1>, <h2>, <h3> pour une structure claire et accessible aux lecteurs d'écran et renseignement des alt="" dans les images

## Choix techniques Tailwind
Tokens via @theme : couleurs (--brand-color-back, --brand-color-font) et font (--font) centralisés pour faciliter le travail
Structure des sections : chaque section est un composant React indépendant (Hero, Navbar, Articles, Footer) sauf la section main car elle comprends la navbar
Responsive : approche mobile-first avec md: et lg: pour adapter la mise en page — menu hamburger sur mobile, grille produits 2→5 colonnes, accordéon footer sur mobile
Utilitaires personnalisés : classe btn-primary pour le bouton incliné réutilisable, heading-1 pour le titre principal et wrapper

## Difficultés rencontrée
Responsive de la navbar et du footer