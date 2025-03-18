<template>
    <div>
      <h1>Welcome to the Protected Page</h1>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script setup>
  function logout() {
    // Implement logout logic
    navigateTo('/api/auth/logout');
  }
  </script>