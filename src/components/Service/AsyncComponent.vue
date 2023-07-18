<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { api } from "../../utils/api";

const users = ref(false);
const loading = ref(false);
const controller = new AbortController();

const getUsers = async () => {
  loading.value = true;
  try {
    const res = await api.get("users", { signal: controller.signal });
    users.value = res.data;
    loading.value = false;
  } catch (err) {
    console.log(err);
    loading.value = false;
  }
};
onMounted(() => !users.value && getUsers());
onUnmounted(() => controller.abort());
</script>

<template>
  <h1><em>Async list of users</em></h1>
  <div v-if="loading" style="text-align: center; margin: 4rem 0">
    <v-progress-circular indeterminate color="primary" />
  </div>
  <ul v-for="user in users" :key="user.id" style="list-style: none">
    <li>
      <strong>Name:</strong> {{ user.name }} -
      <em>{{ user.email }} -{{ user.username }}</em>
    </li>
  </ul>
</template>

<style scoped></style>
