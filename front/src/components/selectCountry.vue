<template>
  <div>
    <div class="section">
      <h1 class="title">Celebraciones</h1>
    </div>
    <div class="section">
      <label for="selectPais" class="label"
        >Pais seleccionado:
        <!--<select v-model="paisSeleccionado" v-on:change="this.regresarPais">-->
        <div class="select">
          <select
            name="selectPais"
            v-model="paisSeleccionado"
            v-on:change="this.buscarEstados"
          >
            <option
              v-for="(pais, key) in this.paises"
              :key="key"
              :value="key"
              >{{ pais }}</option
            >
          </select>
        </div>
      </label>
      <br />
      Estado:
      <div v-if="this.estados.length != 0" class="select">
        <select>
          <option v-for="(pais, key) in this.estados" :key="key" :value="key">{{
            pais
          }}</option>
        </select>
      </div>
      <p v-else>No hay estados disponibles</p>
      <!--<button @click="this.obtenerFechas">Obtener fechas</button>-->
      <div v-if="this.fechas.length != 0">
        <table class="table is-hoverable">
          <thead>
            <td>
              Festividad
            </td>
            <td>
              Fecha
            </td>
          </thead>
          <tbody>
            <tr v-for="(fecha, key) in this.fechas" :key="key">
              <td>
                <a>{{ fecha.name }}</a>
              </td>
              <td>
                {{ convertiFecha(fecha.date) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paises: [],
      estados: [],
      baseURL: "http://127.0.0.1:8081",
      paisSeleccionado: undefined,
      fechas: []
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
          this.obtenerFechas();
        });
    },
    obtenerFechas() {
      this.axios
        .get(
          this.baseURL +
            "/api/Festividades/obtenerFechas?pais=" +
            this.paisSeleccionado
        )
        .then(response => {
          this.fechas = response.data;
          console.log(this.fechas);
        });
    },
    convertiFecha(fch) {
      var FechaAux = new Date(fch);
      return (
        FechaAux.getDay() +
        "/" +
        FechaAux.getMonth() +
        "/" +
        FechaAux.getFullYear()
      );
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
<style lang="css" scoped>
selected {
  background-color: #ffcc00;
}
</style>
