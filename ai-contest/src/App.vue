<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
});
</script>

<style>
/* You can add global styles here or keep them in your styles.css */
.main-content {
  padding-bottom: 80px; /* Add bottom padding to prevent content from being hidden behind the fixed footer */
}
</style>
