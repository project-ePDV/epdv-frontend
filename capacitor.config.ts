import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.starttech.epdv',
  appName: 'epdv',
  webDir: 'www',
  server: {
    androidScheme: 'http'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
