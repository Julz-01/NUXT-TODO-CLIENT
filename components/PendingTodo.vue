<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"> PENDING TODOS </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="todos_pending"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.ckbox="{ item }">
              <v-checkbox
                v-model="selected"
                :value="item.id"
                @click="setDone(item.id)"
              ></v-checkbox>
            </template>
            <template v-slot:item.remove="{ item }">
              <v-btn small color="red" @click="removeTodo(item.id)">
                delete</v-btn
              >
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <AddTodo />
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "SET AS DONE",
          align: "start",
          sortable: false,
          value: "ckbox",
        },
        { text: "NAME", value: "name" },
        { text: "ACTION", value: "remove" },
      ],
      selected: [],
    };
  },
  async fetch() {
    try {
      await this.$store.dispatch("todos/getTodos");
    } catch (err) {
      console.log(err.response);
    }
  },
  computed: {
    ...mapState("todos", ["todos_pending"]),
  },
  methods: {
    async setDone(id) {
      try {
        await this.$store.dispatch("todos/setDone", id);
      } catch (err) {
        console.log(err.response);
      }
    },
    async removeTodo(id) {
      try {
        await this.$store.dispatch("todos/removeTodo", id);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
};
</script>