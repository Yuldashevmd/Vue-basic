<script setup>
import { ref } from "vue";
import Table from "./Table.vue";
import AsyncComponent from "./AsyncComponent.vue";
import Vuex from "./Vuex.vue";
import Pinia from "./Pinia.vue";

const columns = [
  {
    key: 1,
    title: "Key",
  },
  {
    key: 2,
    title: "Name",
  },
  {
    key: 3,
    title: "Activity",
  },
  {
    key: 4,
    title: "Done",
  },
];
const rows = ref([]);
const tab = ref(null);

// handleEmit
const handleEmit = (data) => {
  rows.value.push({ ...data, key: new Date().getMilliseconds() });
};
// handleEmitDelete
const handleEmitDelete = (id) => {
  const filteredRows = rows.value.filter((item) => item.key !== id);
  rows.value = filteredRows;
};
// handleDone
const handleDone = (id) => {
  rows.value = rows.value.filter((item) => item.key !== id);
};
// handlereturnDone
const handlereturnDone = (item) => {
  rows.value.push(item);
};
// handleGetEditValue
const handleGetEditValue = (item) => {
  const find = rows.value.find((value) => value.key === item.value.key);
  find.value = item;
};
</script>

<template>
  <div>
    <v-card>
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        bgColor="rgb(223, 224, 249)"
      >
        <v-tab value="1">To-do Crud</v-tab>
        <v-tab value="2">Async component</v-tab>
        <v-tab value="3"> Vuex </v-tab>
        <v-tab value="4"> Pinia </v-tab>
      </v-tabs>

      <v-window v-model="tab" class="mt-5">
        <v-window-item value="1">
          <Table
            :columns="columns"
            :rows="rows"
            @data="handleEmit"
            @id="handleEmitDelete"
            @doneId="handleDone"
            @returnDone="handlereturnDone"
            @editedValue="handleGetEditValue"
          />
        </v-window-item>
        <v-window-item value="2">
          <AsyncComponent />
        </v-window-item>
        <v-window-item value="3"><Vuex /></v-window-item>
        <v-window-item value="4">
          <Pinia />
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<style scoped>
.v-card {
  min-height: 90vh;
  height: 100%;
}
.v-window-item {
  padding: 2rem 2%;
}
</style>
