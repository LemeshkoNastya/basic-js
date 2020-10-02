const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },

  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(typeof(position) !== 'number' || (position - 1) < 0 || (position - 1) >= this.getLength()) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },

  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let strChain = "";
    for (let i = 0; i < this.getLength() - 1; i++) {
      strChain += "( " + this.chain[i] + " )~~";
    }
    strChain += "( " + this.chain[this.getLength() - 1] + " )";
    this.chain = [];
    return strChain;
  }
};

module.exports = chainMaker;
