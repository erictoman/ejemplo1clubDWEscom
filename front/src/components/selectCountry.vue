<template>
  <div>
    {{ this.info }}
    <select name="" id="">
      <option value=""></option>
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
      .get("http://127.0.0.1:8080/api/Festividades/obtenerPaises")
      .then(response => {
        this.info = response.data;
      });
  }
};
</script>
<style lang="css"></style>
