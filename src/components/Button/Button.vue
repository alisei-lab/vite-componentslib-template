<template>
  <button>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style>

</style>