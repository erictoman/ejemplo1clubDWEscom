<template>
  <div class="section"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm(event) {
      let formData = new FormData();
      formData.append("file", event.target.file[0]);
      this.axios
        .post("http://localhost:8081/SubirArchivo", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function(data) {
          console.log(data.data);
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    }
  }
};
</script>
