<template>
  <div class="user-card">
    <div class="user-card__header">
      <picture>
        <source
            :srcset="user.picture.large"
            width="120px"
            height="120px"
            media="(min-width: 1024px)"
        />
        <source
            :srcset="user.picture.medium"
            width="80px"
            height="80px"
            media="(min-width: 768px)"
        />
        <img
            class="user-card__avatar"
            width="50px"
            height="50px"
            :src="user.picture.thumbnail"
            :alt="`Avatar of ${user.name.first} ${user.name.last}`"
            loading="lazy"
        />
      </picture>
      <h3 class="user-card__name">{{ fullName }}</h3>
    </div>
    <div class="user-card__body">
      <div class="user-card__info-item">
        <strong>Email:</strong> {{ user.email }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IUser } from '@/types/user';

const props = defineProps<{
  user: IUser
}>()

const fullName = computed(() => {
  return `${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`;
});

</script>

<style scoped lang="scss">
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-card__header {
  text-align: center;
  margin-bottom: 16px;
}

.user-card__avatar {
  border-radius: 50%;
  margin-bottom: 8px;
}

.user-card__name {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.user-card__body {
  width: 100%;
}

.user-card__info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.user-card__info-item {
  margin-bottom: 8px;
  font-size: 14px;
  text-align: center;
}

.user-card__info-item strong {
  font-weight: bold;
}
</style>
