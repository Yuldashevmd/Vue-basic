<script setup>
import { computed } from "vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const posts = computed(() => store.getters.posts);
const loading = computed(() => store.state.loading);

// handleIncr
const handleIncr = () => {
  store.commit("increment");
};

const handleDecr = () => {
  store.commit("decrement");
};
onMounted(() => {
  store.dispatch("LoadPosts");
});
</script>

<template>
  <h1>Vuex state management</h1>

  <em>here we take value from store</em>

  <h1>Count: {{ store.state.count }} (max:10, min:0)</h1>
  <div class="d-flex" style="align-items: center; gap: 0.5rem; margin: 1rem 0">
    <v-btn color="success" @click="handleIncr">Increment</v-btn>

    <v-btn color="error" @click="handleDecr">Decrement</v-btn>
  </div>
  <v-card style="padding: 1rem">
    <v-card-title class="mb-3">
      <h1>Async request to Api via Vuex</h1>
    </v-card-title>
    <v-divider />
    <div v-if="posts" v-for="post in posts">
      {{ post.id }}: {{ post.title }}
    </div>
    <div v-if="loading" style="text-align: center; margin: 4rem 0">
      <v-progress-circular indeterminate color="primary" />
    </div>
  </v-card>
</template>

<style scoped></style>
