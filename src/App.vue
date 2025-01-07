<template>
  <div class="main-page">
    <h1 class="main-page__title">Список юзеров:</h1>
    <div class="main-page__users-list">
      <UserCard v-for="user in users" :key="user.email" :user="user" class="main-page__user-card" />
    </div>
    <div v-if="loading" class="main-page__loading-text">Loading...</div>
    <div v-if="error" class="main-page__loading-text">Ошибка запроса, <button @click="refetch">попробовать снова</button></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import UserCard from './components/UserCard.vue';
import {useFetchUsers} from "@/composables/fetchUsers";

const { fetchUsers, loading, page, users, error, refetch } = useFetchUsers()

const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10 && !loading.value) {
    fetchUsers(++page.value);
  }
};

onMounted(() => {
  fetchUsers(page.value);
  window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.main-page {
  font-family: Arial, sans-serif;
  padding: 20px;

  &__title {
    width: 100%;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  &__users-list {
    display: flex;
    flex-wrap: wrap; /* Перенос карточек на новую строку */
    justify-content: center; /* Центрирование карточек по горизонтали */
    gap: 16px; /* Расстояние между карточками */
    margin: 0 auto;
    padding: 16px;
    box-sizing: border-box;
  }

  /* Карточка пользователя */
  &__user-card {
    flex: 1 1 calc(50% - 16px); /* Занимает 50% ширины минус отступ */
    max-width: calc(50% - 16px);
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex: 1 1 100%; /* На мобильных устройствах занимает всю ширину */
      max-width: 100%;
    }
  }

  /* Дополнительный стиль для центрации, если карточек меньше двух */
  &__users-list:only-child {
    justify-content: flex-start; /* Если одна карточка, выравнивается влево */
  }


  &__loading-text {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: gray;
  }
}
</style>
