<template>
  <div class="home">
    <a href="/register" target="_blank" rel="noopener noreferrer">
      <video autoplay muted loop playsinline class="banner">
        <source :src="bannerVideo" type="video/mp4" />
        Вашият браузър не поддържа видео тага.
      </video>
    </a>
    <h3>Станете част от едно събитие от нова генерация!</h3>
    <h5>Научете повече и се регистрирайте сега.</h5>
    <router-link to="/event-info">Научи повече</router-link> |
    <router-link to="/register">Регистрирай се</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BannerVideo from '@/assets/banner.mp4'; 

export default defineComponent({
  name: 'HomePage',
  setup() {
    return {
      bannerVideo: BannerVideo,
    };
  },
});
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 1px;
}

.banner {
  width: 100%;
  max-width: 1000px;
  height: 340px;
  margin-bottom: 20px;
  display: block;
}

video {
  object-fit: cover;
}

.home a:focus {
  outline: none;
}
</style>
