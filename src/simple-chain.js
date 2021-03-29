const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )~~`);

    return this;
  },

  removeLink(position) {
    if (position === 0 || position > this.getLength() - 1) {
      this.chain = [];
      throw new Error("Unable to remove link!");
    }

    this.chain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    const render = this.chain.join("").slice(0, -2);
    this.chain = [];

    return render;
  },
};

module.exports = chainMaker;
