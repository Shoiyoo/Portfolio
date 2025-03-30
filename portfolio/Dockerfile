# Utiliser une image légère de Node.js
FROM node:18-slim

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances pour optimiser la mise en cache
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Démarrer Next.js en mode développement
CMD ["npm", "run", "dev"]
