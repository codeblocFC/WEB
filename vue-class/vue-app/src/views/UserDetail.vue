<template>
  <div v-if="loaded">
    <img :src="user.picture.large" alt="" />
    <h2>{{ user.name.first }}</h2>
  </div>
</template>


<script>
import api from "@/api";
export default {
  data() {
    return {
      user: {},
      loaded: false
    };
  },
  created() {
    this.getUser(this.$route.query.id);
  },
  methods: {
    getUser(id) {
      (async () => {
        this.user = await api.getUserData(id),
        this.loaded = true;
      })();
    },
  },
};
</script>