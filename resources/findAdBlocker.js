import { detectAdBlock } from '/resources/detectAdBlock.js';

export default class FindAbBlocker{
  constructor() {
    this.result = false;
    window.onload = this.detectAdBlock();
  }

  async detectAdBlock() {
    this.result = await detectAdBlock();
  }

}