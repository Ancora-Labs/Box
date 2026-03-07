FROM node:20-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends git ca-certificates curl \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json ./
COPY src ./src

# Install dependencies required by worker scripts.
RUN npm install --omit=dev

CMD ["node", "/app/src/workers/run_task.js"]
