<script setup>
import { computed, onMounted, ref, watch } from "vue";

const count = ref(0);
const message = ref("");
const InputVal = ref("");

// handleIncrement
const handleIncrement = () => {
  message.value = false;
  if (count.value >= 10) {
    count.value;
    message.value = "You have reached maximum count value";
  } else {
    count.value++;
  }
};

// handleDecrement
const handleDecrement = () => {
  message.value = false;
  if (count.value === 0) {
    count.value;
    message.value = "You have reached minimum count value";
  } else {
    count.value--;
  }
};

// const ComputedFn = computed(() => {
//   console.log(
//     "Computed work like useMemo it keeps triggering after every render when this function calls in template"
//   );
// });

// onMounted(() => {
//   console.log("mounted like useEffect but work only when component mounts");
// });

// watch(count, () => {
//   console.log("this Watch works when dependencies changes");
// });
</script>

<template>
  <div class="Counter">
    <v-card>
      <v-card-title> Here will be title </v-card-title>
      <v-divider />
      <v-card-text
        >This is example of vue3+vuetify project on composition API</v-card-text
      >
      <v-card-actions>
        <v-btn color="primary" variant="flat">Example</v-btn>
        <v-btn color="warning" variant="flat">Example 2</v-btn>
      </v-card-actions>
    </v-card>
    <div>
      <h1>Counter: {{ count }}</h1>
      <p v-if="message" class="warn__message">{{ message }}</p>
      <div class="btn-group">
        <button class="btn btn-increment" @click="handleIncrement">
          Increment
        </button>
        <button class="btn btn-decrement" @click="handleDecrement">
          Decrement
        </button>
      </div>
    </div>
    <div>
      <h2>Value: {{ InputVal }}</h2>
      <input
        v-model="InputVal"
        class="input"
        type="text"
        placeholder="Type something..."
      />
    </div>
  </div>
  <!-- <div>{{ ComputedFn }}</div> -->
</template>

<style scoped>
.Counter {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.btn {
  width: 120px;
  height: 40px;
  padding: 5px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  user-select: none;
  background: whitesmoke;
}
.btn-group {
  display: flex;
  align-items: center;
  gap: 0 8px;
}
.btn-increment:hover {
  transition: background-color 0.2s ease-out;
  background-color: rgb(103, 213, 103);
  color: #fff;
}
.btn-decrement:hover {
  transition: background-color 0.2s ease-out;
  background-color: rgb(213, 103, 103);
  color: #fff;
}

.warn__message {
  color: red;
  margin: 0.2rem 0;
  user-select: none;
}
.input {
  width: 240px;
  margin: 1rem 0;
  border: 1px solid lightgrey;
  padding: 8px;
  height: 40px;
  border-radius: 4px;
  outline: none;
}
.input:focus {
  box-shadow: 0 0 1px 1px rgb(102, 194, 255);
  border-color: lightskyblue;
}
</style>
