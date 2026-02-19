import { loadConfig } from './config.js';
import { formatDate, slugify } from './utils.js';

const config = loadConfig();

interface Server {
  port: number;
  routes: Map<string, (req: unknown) => unknown>;
}

function createServer(): Server {
  return {
    port: config.port,
    routes: new Map(),
  };
}

const server = createServer();

server.routes.set('/health', () => ({ status: 'ok', timestamp: formatDate(new Date()) }));
server.routes.set('/api/v1/process', (req) => {
  const slug = slugify(String(req));
  return { processed: true, slug };
});

console.log(`Server configured on port ${server.port}`);
export { server };
