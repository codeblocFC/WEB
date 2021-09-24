<template>
  <div class="container">
      <!-- <UsersTable :users="users"></UsersTable> -->
      <users v-bind:users="users"></users>
  </div>
</template>
<script>
import api from "@/api";
import Users from "@/components/Users";
//import UsersTable from "@/components/UsersTable";
export default {
  components: {
    Users,
    //UsersTable,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    //api.getUsersPromise().then(data=>console.log(data));
    //api.getUsersPromise().then(data => this.users = data);
    (async () => {
      this.users = await api.getUsersAsync();
    })();
  },
};
</script>