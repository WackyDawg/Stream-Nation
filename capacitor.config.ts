import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wackydawg.tvapp',
  appName: 'my-app',
  webDir: 'dist/my-app/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
