new Vue({
  el: "#challange",
  data: {
    value: "",
  },
  methods: {
    showAlert() {
      alert("Show Alert");
    },
    insertValue(e) {
      this.value = e.target.value;
      console.log(this.value);
    },
  },
});
