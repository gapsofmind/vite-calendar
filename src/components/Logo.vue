<script>
  export default {
    props: {
      msg: String
    }
  };
</script>

<template>
  <img alt="" src="/assets/mglogo.webp" />
  <p>{{ msg }}</p>
</template>

<style>
  p {
    font-weight: bold;
  }

  img {
    width: 30%
  }

</style>
