const { Plugin } = require("@vizality/entities");
const { channels, getModule } = require("@vizality/webpack");
const { ComponentDispatch } = getModule("ComponentDispatch");
module.exports = class edited extends (
  Plugin
) {
  onStart() {
	  this.interval = setInterval(() => {
		  const time = Math.floor(Math.random() * 50) * 100;
		  setTimeout(() => {
			  this.shake();
		  }, time)
	  }, 5001);
  }
  shake() {
	 ComponentDispatch.dispatchToLastSubscribed("SHAKE_APP", {duration:1001});
  }
  onStop() {
	  clearInterval(this.interval);
  }
};
