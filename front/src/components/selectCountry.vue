<template>
  <div>
    Pais seleccionado: {{ paisSeleccionado }}
    <br />
    <!--<select v-model="paisSeleccionado" v-on:change="this.regresarPais">-->
    <select v-model="paisSeleccionado" v-on:change="this.buscarEstados">
      <option v-for="(pais, key) in this.paises" :key="key" :value="key">{{
        pais
      }}</option>
    </select>
    <br />
    <!--
    Estado:
    <select v-if="this.estados.length != 0">
      <option v-for="(pais, key) in this.estados" :key="key" :value="key">{{
        pais
      }}</option>
    </select>
    <p v-else>No hay estados disponibles</p>
    -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      paises: [],
      estados: [],
      baseURL: "http://127.0.0.1:8081",
      paisSeleccionado: undefined
    };
  },
  methods: {
    buscarEstados() {
      console.log(
        this.baseURL +
          "/api/Festividades/obtenerEstados?pais=" +
          this.paisSeleccionado
      );
      this.axios
        .get(
          this.baseURL +
            "/api/Festividades/obtenerEstados?pais=" +
            this.paisSeleccionado
        )
        .then(response => {
          this.estados = response.data;
        });
    }
  },
  mounted() {
    this.axios
      .get(this.baseURL + "/api/Festividades/obtenerPaises")
      .then(response => {
        this.paises = response.data;
      });
  }
};
</script>
<style lang="css"></style>
