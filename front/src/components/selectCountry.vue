<template>
  <div>
    {{ paisSeleccionado }}
    <select v-model="paisSeleccionado" vue-on:change="this.regresarPais()">
      <option v-for="(pais, key) in this.info" :key="key" :value="pais">{{
        pais
      }}</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [],
      paisSeleccionado: ""
    };
  },
  methods: {
    regresarPais() {
      alert(this.paisSeleccionado);
      this.$emit("onPais");
    }
  },
  mounted() {
    this.axios
      .get("http://127.0.0.1:8081/api/Festividades/obtenerPaises")
      .then(response => {
        this.info = response.data;
      });
  }
};
</script>
<style lang="css"></style>
