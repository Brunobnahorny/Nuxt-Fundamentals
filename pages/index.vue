<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">nuxt-fundamentals</h1>
      <h2 class="subtitle">Um projeto de estudo</h2>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: "The Nuxt schmeck gut! 🍺",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Um aplicativo Nuxt bem doido!",
          name: "Nuxt teste",
          content: "Balut, Házskskksel, e outro estranho"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
}
</style>