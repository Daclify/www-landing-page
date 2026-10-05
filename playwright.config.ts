import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  workers: 3,
  use: { baseURL: 'http://127.0.0.1:4180', trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    command: 'npm run build && node tools/serve.ts',
    port: 4180,
    env: { PORT: '4180' },
    reuseExistingServer: false,
  },
});
