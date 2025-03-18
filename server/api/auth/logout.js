import client from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
  const authClient = await client();
  const token = useCookie('auth_token').value;

  if (token) {
    await authClient.revoke(token);
    deleteCookie(event, 'auth_token');
  }

  await sendRedirect(event, '/login');
});