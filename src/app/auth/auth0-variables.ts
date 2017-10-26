interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'oN0UQ2jXHYIXljghtg7FWG1qTXxtizJN',
  domain: 'tomohiro-sato.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
