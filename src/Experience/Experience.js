import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time.js";

export default class Experience {
  constructor(canvas) {
    //Global Access
    window.experience = this;

    //Options
    this.canvas = canvas;

    //Setup
    this.sizes = new Sizes();
    this.time = new Time();

    // Resize event
    this.sizes.on("resize", () => {
      this.resize();
    });
  }
  resize() {}
}
