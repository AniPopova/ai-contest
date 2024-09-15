<template>
  <form @submit.prevent="submitForm">
    <label for="name">Име:</label>
    <input type="text" id="name" name="name" v-model="formData.name" required />

    <label for="email">Имейл:</label>
    <input type="email" id="email" name="email" v-model="formData.email" required />

    <label for="position">Позиция:</label>
    <select id="position" name="position" v-model="formData.position" required>
      <option value="">Изберете позиция</option>
      <option value="HR">HR</option>
      <option value="CEO">CEO</option>
    </select>

    <button type="submit">Регистрирай се</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'RegistrationForm',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      position: '',
    });

    const submitForm = async () => {
      try {
        const response = await axios.post('http://localhost:3000/register', formData.value);
        alert('Регистрацията е успешна! Проверете имейла си за потвърждение.');
      } catch (error) {
        console.error('Грешка при регистрацията:', error);
        alert('Възникна грешка при регистрацията. Моля, опитайте отново.');
      }
    };

    return {
      formData,
      submitForm,
    };
  },
});
</script>

