<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"> DONE TODOS </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="todos_done"
            :items-per-page="10"
            class="elevation-1"
          >
          </v-data-table>
        </v-card-text>
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
          text: "ACTIONS",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "STATUS", value: "status" },
      ],
      selected: [],
    };
  },
  async fetch() {
    try {
      await this.$store.dispatch("todos/getTodosDone");
    } catch (err) {
      console.log(err.response);
    }
  },
  computed: {
    ...mapState("todos", ["todos_done"]),
  },
};
</script>