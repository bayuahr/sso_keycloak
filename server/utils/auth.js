import {Issuer} from 'openid-client';

export default async function initializeAuth() {
  try {
    console.log('Discovering Keycloak issuer...');
    const keycloakIssuer = await Issuer.discover(process.env.KEYCLOAK_ISSUER);
    // console.log('Discovered issuer:', keycloakIssuer);

    const client = new keycloakIssuer.Client({
      client_id: process.env.KEYCLOAK_CLIENT_ID,
      redirect_uris: ['http://localhost:3000/auth/callback'],
      post_logout_redirect_uris: ['http://localhost:3000'],
      response_types: ['code'],
    });

    console.log('Client initialized successfully');
    return client;
  } catch (error) {
    console.error('Error initializing OpenID client:', error);
    throw error;
  }
}