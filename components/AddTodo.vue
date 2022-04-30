<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-text-field label="TODO" outlined v-model="todo.name"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn color="success" class="mt-2" @click.prevent="addtodo()"
          >ADD</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        name: "",
      },
    };
  },
  methods: {
    async addtodo() {
      try {
        const res = await this.$store.dispatch("todos/addTodo", this.todo);
        if (res.status == 201) {
          this.todo.name = "";
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
};
</script>