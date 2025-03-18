import client from '~/server/utils/auth';
import { sendRedirect } from 'h3';
import cors from 'cors';

export default defineEventHandler(async (event) => {
  // Apply CORS middleware
  await new Promise((resolve, reject) => {
    cors({
      origin: 'http://localhost:3000', 
      methods: ['POST'],
    })(event.node.req, event.node.res, resolve);
  });

  const authClient = await client();
  const authorizationUrl = authClient.authorizationUrl({
    scope: 'openid profile email',
  });

  await sendRedirect(event, authorizationUrl);
});