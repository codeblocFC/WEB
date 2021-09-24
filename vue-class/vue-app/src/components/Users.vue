<template>
  <div class="row">
    <div class="col-3" v-for="user in users" v-bind:key="user.login.uuid">
      <div class="card mb-5">
        <a :href="'/user/' + user.login.uuid">
          <img class="card-img-top" :src="user.picture.large" alt="" />
        </a>
        <h2>{{ user.name.first }}</h2>
        <h2>{{ user.location.city | uppering }}</h2>
        <h2>{{ user.phone | removingLine }}</h2>
      </div>
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