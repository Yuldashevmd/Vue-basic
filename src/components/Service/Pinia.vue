<script setup>
import { computed } from "vue";
import { usePiniaCounter } from "../../store/Pinia";

const counter = usePiniaCounter();
const posts = computed(() => counter.posts);
const loading = computed(() => counter.loading);
</script>

<template>
  <h1>Pinia</h1>
  <h1>Count: {{ counter.count }}</h1>
  <div class="d-flex" style="align-items: center; gap: 0 0.5rem">
    <v-btn color="info" @click="counter.incrPinia(2)"> Increment </v-btn>
    <v-btn color="error" @click="counter.decrPinia(2)"> Decrement </v-btn>
  </div>
  <v-card style="margin: 2rem 0; padding: 1rem">
    <v-card-title class="mb-2">
      <v-btn color="pink" @click="counter.LoadPosts">Fetch posts via Pinia</v-btn>
    </v-card-title>
    <v-divider/>
    <p v-if="posts" v-for="item in posts">{{ item.id }}: {{ item.title }}</p>
    <div v-if="loading" style="text-align: center; margin: 4rem 0">
      <v-progress-circular indeterminate color="primary" />
    </div>
  </v-card>
</template>

<style scoped></style>
