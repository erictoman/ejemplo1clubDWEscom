<template>
  <div>
    <select name="" id="">
      <option v-for="(pais, key) in this.info" :key="key">{{ pais }}</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: ""
    };
  },
  mounted() {
    this.axios
      .get("http://127.0.0.1:8081/api/Festividades/obtenerEstados")
      .then(response => {
        this.info = response.data;
      });
  }
};
</script>
<style lang="css"></style>
