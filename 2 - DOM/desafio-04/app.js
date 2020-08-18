new Vue({
  el: "#challange",
  data: {
	currentClass: "",
	flexibleClass:"",
	fourChallange:"",
	animationClass: false,
	currentStyle:"",
	progressBar:"",
	incrementWidth: 0,
	backgroundColor: "",
	width: '0px'
  },
  methods: {	
    startEffect() {
      setInterval(() => {
        this.currentClass = this.currentClass === "highlighted" ? "shrink" : "highlighted";
      }, 1000);
    },
    startProgress() {
		setInterval(() => {
			this.incrementWidth <500 && (this.incrementWidth += 50);
			this.width = `${this.incrementWidth}%`
		}, 300);
		this.backgroundColor = "#45c"
	},
    startProgressCss() {
		this.progressBar = "progressBar"
	},
	setAnimationClass(event) {
		this.animationClass = event.target.value === 'true' ? 'true' : 'false'
	}
	
  },
});
