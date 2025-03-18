<template>
  <div>
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
async function login() {
  try {
    await $fetch('/api/auth/login', { method: 'POST' });
  } catch (error) {
    console.error('Login failed:', error);
  }
}
</script>