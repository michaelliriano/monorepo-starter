Monorepo Starter Using Turborepo, Docker, NodeJS & Nginx

Requirements
-   Docker
-   NodeJS
-   PNPM

How to Run Project

Step 1 - Create .env file with these variables
-   WEBAPP_PORT=ADD PORT HERE (EX. 3000)
-   NGINX_PORT=ADD PORT HERE (EX. 80)


Step 1 - Install Packages
-   pnpm install

Step 2 - Start Development Server
-   pnpm dev

Step 3 - Start Production Server
-   pnpm build
-   pnpm start

Step 4 - Run Application in Docker
-   ./deploy.sh
