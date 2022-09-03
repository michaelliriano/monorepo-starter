<h1>Monorepo Starter Using Turborepo, Docker, NodeJS & Nginx</h1>

<h3>Requirements</h3>

<ul>
  <li><a href="https://www.docker.com/">Docker</a></li>
  <li><a href="https://nodejs.org/en/download/">NodeJS</a></li>
  <li><a href="https://pnpm.io/installation">PNPM</a></li>
</ul>

<hr />

<h3>How to Run Project</h3>

<p>Create .env file with these variables</p>
<ul>
  <li>WEBAPP_PORT=ADD PORT HERE (Ex. 3000)</li>
  <li>NGINX_PORT=ADD PORT HERE (Ex. 80)</li>
</ul>

<p>Install Packages</p>
<ul>
  <li>pnpm install</li>
</ul>

<p>Start Development Server</p>
<ul>
  <li>pnpm dev</li>
</ul>

<p>Start Production Server</p>
<ul>
  <li>pnpm build</li>
  <li>pnpm start</li>
</ul>

<p>Run Application in Docker</p>
<ul>
  <li>./deploy.sh</li>
</ul>

<h3>CLI Instructions</h3>

<p>Create React App</p>
<ul>
  <li>pnpm cli create-react-app --ui react-app</li>
</ul>

<p>Create NextJS App</p>
<ul>
  <li>pnpm cli create-react-app --next next-app</li>
</ul>