export interface AppConfig {
  port: number;
  databaseUrl: string;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  apiVersion: string;
}

export function loadConfig(): AppConfig {
  return {
    port: parseInt(process.env['PORT'] ?? '3000', 10),
    databaseUrl: process.env['DATABASE_URL'] ?? 'postgresql://localhost:5432/app',
    logLevel: (process.env['LOG_LEVEL'] as AppConfig['logLevel']) ?? 'info',
    apiVersion: 'v1',
  };
}
