import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dose.app',
  appName: 'dose',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
