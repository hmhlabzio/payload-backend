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

# expose and run app
EXPOSE 3000
CMD ["npm", "start"]
