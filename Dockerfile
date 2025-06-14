# base image
FROM node:20-alpine

# working directory
WORKDIR /app

# copy only dependency files
COPY package.json package-lock.json* ./

# install dependencies safely
RUN if [ -f package-lock.json ]; then \
      npm install; \
    else \
      echo "No lockfile found" && exit 1; \
    fi

# copy rest of the project
COPY . .

# ❗ ADD BUILD STEP HERE
RUN npm run build

# expose and run app
EXPOSE 3000

# run the production server
CMD ["npm", "start"]
