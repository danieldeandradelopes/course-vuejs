new Vue({
  el: "#challange",
  data: {
    value: 0,
  },
  computed: {
    result() {
      return this.value != 37
        ? "This value is different of 37"
        : "This value is equal 37";
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
});
