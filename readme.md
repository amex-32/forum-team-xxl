# Plein les oreilles : forum musical

Forum autour de la musique : création de sujets, réponses, comptes utilisateurs et page d'administration. API Node.js (Express, JWT) avec une base MySQL, front en HTML/JS.

Projet de groupe réalisé en formation, avec Omrane Riahi.

## Lancer le projet

1. Démarrer MySQL et créer une base `forum_music`.
2. Importer `migration.sql` puis `insertion.sql` (dossier `backend/database/`).
3. Créer `backend/.env` avec `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` et `JWT_SECRET`. Les valeurs par défaut sont dans `backend/config/db.js`.
4. Démarrer l'API :

```bash
cd backend
npm install
npm run dev
```

L'API écoute sur le port 3000. Ouvrir ensuite `frontend/index.html` dans le navigateur.
