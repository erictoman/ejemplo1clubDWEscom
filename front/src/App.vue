<template>
  <div id="app">
    <selectCountry v-on:onPais="this.alerta" />
  </div>
</template>

<script>
import selectCountry from "./components/selectCountry";
export default {
  name: "app",
  components: {
    selectCountry
  },
  methods: {
    alerta(pais) {
      alert(pais);
    }
  }
};
</script>

<style></style>
