<template>
  <div>
    <users v-bind:users="users"></users>
  </div>
</template>

<script>
import api from "@/api";
import Users from "@/components/Users";

export default {
  components: {
    Users,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    //api.getUsersPromise().then(data=>console.log(data));
    //api.getUsersPromise().then(data => this.users = data);
    (async () => {this.users = await api.getUsersAsync()})();
  },
};
</script>