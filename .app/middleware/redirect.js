const LOGIN_PATH = '/auth/login';
const SIGNUP_PATH = '/auth/signup';
const EN_LOGIN_PATH = '/en/login'; // Fixing the typo
const EN_SIGNUP_PATH = '/en/signup';

const protectedPaths = [LOGIN_PATH, SIGNUP_PATH, EN_LOGIN_PATH, EN_SIGNUP_PATH];

export default defineNuxtRouteMiddleware((to, from) => {

  if (protectedPaths.includes(to.fullPath)) {
    const callBackUrl = encodeURIComponent(from.fullPath);
    return navigateTo(`${to.fullPath}?callBackUrl=${callBackUrl}`);
  }
});
