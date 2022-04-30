<template>
  <v-container fluid>
    <v-divider></v-divider>
    <v-tabs v-model="tab" background-color="transparent" color="blue" grow>
      <v-tab v-for="item in items" :key="item.tab_name">
        {{ item.tab_name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab_name">
        <v-row dense class="pa-12" v-if="item.tab_name == 'PENDING'">
          <v-col cols="12">
            <PendingTodo />
          </v-col>
        </v-row>
        <!-- DIVISION -->
        <v-row class="pa-12" v-if="item.tab_name == 'DONE'">
          <v-col cols="12">
            <DoneTodo />
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          tab_name: "PENDING",
          tab_contents: [],
        },
        {
          tab_name: "DONE",
          tab_contents: [],
        },
      ],
    };
  },
};
</script>
