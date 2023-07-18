<script setup></script>

<template>
  <div class="nav">
    <h1 @click="$router.push('/')">Home</h1>
    <ul class="menu__list">
      <li class="menu__item">
        <router-link to="Counter" v-slot="{ isActive }">
          <span :class="isActive && 'isActive'">Counter</span></router-link
        >
      </li>
      <li class="menu__item">
        <router-link to="Service" v-slot="{ isActive }"
          ><span :class="isActive && 'isActive'">Service</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav {
  width: 100%;
  height: 75px;
  padding: 0 10%;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav h1 {
  cursor: pointer;
}
.menu__list {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.menu__item {
  list-style: none;
}
.menu__item a {
  color: #fff;
  text-decoration: none;
}
.isActive {
  border-bottom: 3px solid crimson;
  padding-bottom: 0.5rem;
  opacity: 0.9;
}
</style>
