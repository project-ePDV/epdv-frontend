import { isPlatform } from '@ionic/angular';
import config from '../../../../capacitor.config';

export const domain = 'dev-ifuj8gvou4nx1rir.us.auth0.com';
export const clientId = '3uYWmyDEyqgtZiZHCifqd2678SyzxWRw';

const { appId } = config;
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : window.location.origin;

