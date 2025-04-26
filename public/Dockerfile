# Imagen base de Node.js
FROM node:18

# Crear directorio de la app
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de archivos
COPY . .

# Construir el frontend
RUN npm run build

# Exponer el puerto (Railway usa automáticamente el ENV PORT)
ENV PORT=3000

# Comando para correr la app
CMD ["npm", "start"]
