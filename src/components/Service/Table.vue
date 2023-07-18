<script setup>
import { defineProps, ref } from "vue";

const { columns, rows } = defineProps(["columns", "rows"]);
const emit = defineEmits(["data", "id", "doneId", "returnDone",'editedValue']);

// vars
const defaultValues = ref();
const dialog = ref(false);
const fillText = ref("");
const doneList = ref([]);
const data = ref({
  name: "",
  activity: "",
  done: false,
});

// handleEmitValues
const handleEmitValues = () => {
  if (data.value.name !== "" && data.value.activity !== "") {
    emit("data", data.value);
    data.value.name = "";
    data.value.activity = "";
    fillText.value = "";
  } else {
    fillText.value = "Please, fill the all empty blanks!";
  }
};

// handleDelete
const handleDelete = (id) => {
  emit("id", id);
};

// handleDone
const handleDone = (id) => {
  const filtered = rows.filter((item) => item.key === id);
  doneList.value.push(...filtered);
  emit("doneId", id);
};

// handleBackTask
const handleBackTask = (id) => {
  const returnDone = doneList.value.find((item) => item.key === id);
  emit("returnDone", returnDone);
  doneList.value = doneList.value.filter((item) => item.key !== id);
};

// handleEdit
const handleEdit = (item) => {
  defaultValues.value = item;
};
// handleEditSave
const handleEditSave =()=>{
  emit('editedValue',defaultValues);
  dialog.value=false
}
</script>

<template>
  <div class="form">
    <input class="input" v-model="data.name" type="text" placeholder="name" />
    <input
      class="input"
      v-model="data.activity"
      type="text"
      placeholder="activity"
    />
    <v-btn class="add" @click="handleEmitValues">Add Task</v-btn>
  </div>
  <v-table class="table" density="comfortable" hover>
    <thead>
      <tr>
        <th v-for="item in columns">{{ item.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="rows.length > 0" v-for="row in rows" :key="row?.key">
        <td>{{ row?.key }}</td>
        <td>{{ row?.name }}</td>
        <td>{{ row?.activity }}</td>
        <td class="action">
          <!-- dialog -->
          <v-dialog v-model="dialog" width="50%">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                size="small"
                color="yellow"
                @click="() => handleEdit(row)"
                >Edit</v-btn
              >
            </template>

            <v-card>
              <v-card-title
                style="
                  display: flex;
                  justify-content: flex-end;
                  color: grey;
                  cursor: pointer;
                "
                @click="dialog = false"
                >X</v-card-title
              >
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-text-field
                      variant="outlined"
                      label="Name"
                      v-model="defaultValues.name"
                    />
                  </v-col>
                  <v-col>
                    <v-text-field
                      variant="outlined"
                      label="Activity"
                      v-model="defaultValues.activity"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions
                style="
                  display: flex;
                  justify-content: flex-end;
                  align-items: center;
                "
              >
                <v-btn color="success" variant="tonal" @click="handleEditSave">Save</v-btn>
                <v-btn color="info" variant="tonal" @click="dialog=false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-btn color="green" size="small" @click="() => handleDone(row.key)"
            >Done</v-btn
          >
          <v-btn color="red" size="small" @click="() => handleDelete(row.key)">
            X
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <em
    v-if="fillText"
    style="color: red; display: flex; justify-content: center"
    >{{ fillText }}</em
  >
  <v-divider class="my-5" />
  <h2>Completed tasks</h2>
  <v-card>
    <v-list
      v-if="doneList.length > 0"
      v-for="item in doneList"
      :key="item.key"
      class="d-flex"
      style="width: 100%; justify-content: space-between"
    >
      <p>{{ item.name }}</p>
      <p>{{ item.activity }}</p>
      <v-btn @click="() => handleBackTask(item.key)">Return task</v-btn>
    </v-list>
  </v-card>
</template>

<style scoped>
.content {
  box-shadow: 0 0 5px lightgrey;
}
.v-list {
  padding: 10px 1rem;
  border-top: 1px solid lightgrey;
}
.form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px 5px;
  margin: 0 auto;
}
.input {
  border: 1px solid lightgrey;
  padding: 5px 8px;
  height: 40px;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
}
.add {
  background: teal;
  color: #fff;
  border: none;
  transition: all 0.2s ease-in-out;
}
.add:hover {
  cursor: pointer;
  opacity: 0.7;
}
.action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1rem;
}

.table {
  margin: 0.5rem auto;
  border: 0.5px solid lightgrey;
}

thead tr th {
  padding: 8px 10px;
  text-align: center;
  background: rgb(255, 235, 227);
}
thead tr th:not(:last-child) {
  border-right: 1px solid lightgrey;
}
tbody tr {
  text-align: center;
}
tbody tr td {
  padding: 8px 10px;
}
tbody tr td:not(:last-child) {
  border-right: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
}
</style>
