FROM node:18-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk update && apk add --no-cache libc6-compat
RUN apk add --no-cache curl 
RUN curl -sL https://unpkg.com/@pnpm/self-installer | node

FROM base as builder
WORKDIR /app
RUN pnpm add -g turbo
COPY . .
RUN turbo prune --scope=web --docker

# Install dependencies
FROM base as installer
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json .
COPY --from=builder /app/out/pnpm-lock.yaml .
RUN pnpm i

# Build the project
COPY --from=builder /app/out/full .
RUN pnpm turbo run build --filter=web

# FROM base as runner (need to be fixed)
WORKDIR /app/apps/web

# COPY --from=installer /app/apps/web/next.config.js .
# COPY --from=installer /app/apps/web/tailwind.config.js .
# COPY --from=installer /app/apps/web/postcss.config.js .

# COPY --from=installer /app/apps/web/package.json .
# COPY --from=installer /app/apps/web/node_modules node_modules
# COPY --from=installer /app/apps/web/.next/ .next/

CMD pnpm start