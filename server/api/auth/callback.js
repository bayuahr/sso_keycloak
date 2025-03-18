import client from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
  const authClient = await client();
  const params = authClient.callbackParams(event.req.url);
  const tokenSet = await authClient.callback('http://localhost:3000/auth/callback', params);

  // Simpan token di session atau cookie
  setCookie(event, 'auth_token', tokenSet.access_token, { httpOnly: true });
  await sendRedirect(event, '/');
});