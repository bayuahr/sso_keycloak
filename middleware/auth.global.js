export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('auth_token').value;
  
    if (!token && to.path !== '/login') {
      return navigateTo('/login');
    }
  });