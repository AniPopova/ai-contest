<template>
    <div class="registration-page">
      <h2>Регистрация за събитието</h2>
      <RegistrationForm />
    </div>
  </template>
  
  <script lang="ts">
  import RegistrationForm from '../components/RegistrationForm.vue';
  
  export default {
    name: 'RegistrationPage',
    components: {
      RegistrationForm,
    },
  };
  </script>
  
  
<style scoped>
.registration-page {
  background: linear-gradient(to right, rgba(248, 243, 243, 0.3), rgba(255, 255, 255, 0.9)),
    url("../assets/great_idea.jpg") center / cover, no-repeat;
  background-attachment: fixed;
  padding-bottom: 20px;
  padding-bottom: 20px;
}

</style>
