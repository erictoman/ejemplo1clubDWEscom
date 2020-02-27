<template>
  <div id="app">
    <fileUploader />
  </div>
</template>

<script>
import fileUploader from "./components/fileUploader";
export default {
  name: "app",
  components: {
    fileUploader
  },
  methods: {
    alerta(pais) {
      alert(pais);
    }
  }
};
</script>

<style></style>
