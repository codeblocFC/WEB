<template>
  <div>
    <div v-for="user in users" v-bind:key="user.login.uuid">
      <a :href="'/user/'+user.login.uuid"><img :src="user.picture.medium" alt="" /></a>
      <h2>{{user.name.first}}</h2>
      <h2>{{user.location.city | uppering}}</h2>
      <h2>{{user.phone | removingLine}}</h2>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
};
</script>