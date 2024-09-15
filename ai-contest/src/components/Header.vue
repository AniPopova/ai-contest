<template>
    <header class="header">
        <a href="https://codeacademy.bg/" target="_blank" rel="noopener noreferrer">
      <img :src="logo" alt="Logo" class="logo" />
    </a>
      <nav class="navbar">
        <ul class="nav-list">
          <li><router-link to="/">Начало</router-link></li>
          <li><router-link to="/event-info">За събитието</router-link></li>
          <li><router-link to="/register">Регистрация</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Logo from '../assets/logo.jpg';
  
  export default defineComponent({
    name: 'Header',
    setup() {
      return {
        logo: Logo,
      };
    },
  });
  </script>
  

  