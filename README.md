# KTM Digital Web Platform

KTM est une plateforme web moderne développée avec **Angular 21** et **TypeScript**. Ce projet inclut plusieurs fonctionnalités (À propos, Solutions, Blog, Contact, Services) structurées selon les meilleures pratiques d'architecture front-end et un design premium.

## 🚀 Technologies Utilisées

- **Framework :** [Angular](https://angular.dev/) (v21.2.0)
- **Langage :** TypeScript
- **Tests :** [Vitest](https://vitest.dev/)
- **Icônes :** Lucide Angular
- **Gestionnaire de paquets :** npm

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre environnement de développement :

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- [npm](https://www.npmjs.com/) (généralement installé avec Node.js)
- [Angular CLI](https://angular.dev/tools/cli) (version 21+) : 
  ```bash
  npm install -g @angular/cli
  ```

## ⚙️ Installation et Configuration

Pour cloner et exécuter ce projet localement, suivez les étapes ci-dessous :

1. **Cloner le dépôt :**
   ```bash
   git clone <URL_DU_DEPOT>
   cd ktm
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

## 🛠️ Commandes Utiles

### 1. Démarrer le serveur de développement
```bash
npm start
# ou
ng serve
```
Le serveur de développement démarrera. Ouvrez votre navigateur et accédez à `http://localhost:4200/`. L'application se rechargera automatiquement à chaque modification des fichiers sources.

### 2. Compiler pour la production
```bash
npm run build
# ou
ng build
```
Les fichiers compilés seront générés et stockés dans le dossier `dist/`. La build de production inclut la minification du code et l'optimisation des assets pour garantir les meilleures performances.

### 3. Lancer les tests unitaires
Ce projet est configuré avec **Vitest** pour une exécution ultra-rapide des tests unitaires.
```bash
npm run test
# ou
ng test
```

## 📁 Architecture du Projet

Le projet suit une architecture modulaire orientée fonctionnalités pour garantir la maintenabilité et la scalabilité :

```text
ktm/
├── public/                 # Assets publics
├── src/
│   ├── app/
│   │   ├── core/           # Composants vitaux et uniques (Footer, Header, Interceptors)
│   │   ├── features/       # Modules spécifiques à chaque page/domaine
│   │   │   ├── about/      # Page À propos
│   │   │   ├── blog/       # Page Blog
│   │   │   ├── contact/    # Page Contact
│   │   │   ├── services/   # Page Services
│   │   │   └── solutions/  # Page Solutions
│   │   └── shared/         # Composants, pipes, et directives réutilisables (UI)
│   ├── assets/             # Images (clients, logos), polices, etc.
│   └── styles/             # Styles globaux, variables CSS, design system
├── package.json            # Déclaration des dépendances et scripts
└── angular.json            # Fichier de configuration principal d'Angular CLI
```

## 👨‍💻 Génération de Code (Angular CLI)

L'Angular CLI inclut des outils puissants pour générer du code (schematics) :

```bash
# Générer un nouveau composant
ng generate component nom-du-composant

# Pour voir toutes les commandes de génération disponibles
ng generate --help
```
